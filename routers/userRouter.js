import express from "express";
import {
  getEditProfile,
  postEditProfile,
  userDetail,
} from "../controlloers/userControllers";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.editProfile(), getEditProfile);
userRouter.post(routes.editProfile(), postEditProfile);

export default userRouter;
