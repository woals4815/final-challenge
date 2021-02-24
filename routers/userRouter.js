import express from "express";
import { userDetail } from "../controlloers/userControllers";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
