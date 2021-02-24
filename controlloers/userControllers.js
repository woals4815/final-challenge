import passport from "passport";
import User from "../models/User";
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find();
    console.log(videos);
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
    body: { nickname, email, aPassword, bPassword },
  } = req;
  if (aPassword !== bPassword) {
    res.status(400);
    res.render("join");
  } else {
    try {
      const user = await User({
        email,
        nickname,
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

export const userDetail = (req, res) => {
  const {
    params: { id },
  } = req;
};
