import express from "express";
import {
  getJoin,
  getLogin,
  home,
  logout,
  postJoin,
  postLogin,
} from "../controlloers/userControllers";
import { searchVideo } from "../controlloers/videoControlloers";
import { onlyPublic } from "../middlewares/localMiddleware";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, searchVideo);

export default globalRouter;
