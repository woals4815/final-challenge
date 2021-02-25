import passport from "passport";
import User from "../models/User";
import routes from "../routes";
import Video from "../models/Video";
import alert from "alert";

export const home = async (req, res) => {
  try {
    const videos = await Video.find();
    console.log(req.user);
    res.render("home", { videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const getLogin = (req, res) => {
  res.render("login");
};
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const getJoin = (req, res) => {
  res.render("join");
};
export const postJoin = async (req, res, next) => {
  const {
    body: { nickName, email, aPassword, bPassword },
  } = req;
  if (aPassword !== bPassword) {
    res.status(400);
    res.render("join");
  } else {
    try {
      const user = await User({
        email,
        nickName,
      });
      console.log(user);
      User.register(user, aPassword);
      console.log("Create User!!!");
      next();
    } catch (error) {
      console.log(error);
      alert("❌ Cannot create an account");
      res.redirect(routes.join);
    }
  }
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const userDetail = (req, res) => {
  res.render("userDetail");
};

export const getEditProfile = (req, res) => {
  res.render("editProfile");
};
export const postEditProfile = async (req, res) => {
  const {
    body: { email, nickName },
    params: { id },
  } = req;
  try {
    const user = await User.findById(id);
    if (user.id !== req.user.id) {
      res.redirect(routes.editProfile(id));
    }
    await User.findByIdAndUpdate(id, { email, nickName });
    alert("Update Success👌");
    res.redirect(userDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.editProfile(id));
  }
};
