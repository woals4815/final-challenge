import passport from "passport";
import User from "../models/User";
import routes from "../routes";
import Video from "../models/Video";
import alert from "alert";

export const home = async (req, res) => {
  try {
    let videos = [];
    videos = await Video.find();
    console.log(req.user);
    res.render("home", { videos, pageName: "Home" });
  } catch (error) {
    console.log(error);
    res.render("home", { pageName: "Home", videos: [] });
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageName: "Login" });
};
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const getJoin = (req, res) => {
  res.render("join", { pageName: "Join Now" });
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
  res.render("userDetail", { pageName: "My Profile" });
};

export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageName: "Edit Profile" });
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
