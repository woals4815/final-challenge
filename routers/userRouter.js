import express from "express";
import {
  getEditProfile,
  postEditProfile,
  userDetail,
} from "../controlloers/userControllers";
import { onlyUser } from "../middlewares/localMiddleware";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), onlyUser, userDetail);
userRouter.get(routes.editProfile(), onlyUser, getEditProfile);
userRouter.post(routes.editProfile(), onlyUser, postEditProfile);

export default userRouter;
