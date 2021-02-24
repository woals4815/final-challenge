import express from "express";
import {
  getJoin,
  getLogin,
  home,
  logout,
  postJoin,
  postLogin,
} from "../controlloers/userControllers";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);
globalRouter.get(routes.logout, logout);

export default globalRouter;
