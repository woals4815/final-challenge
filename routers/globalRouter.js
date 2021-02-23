import express from "express";
import { home } from "../controlloers/userControllers";

const globalRouter = express.Router();

globalRouter.get("/", home);

export default globalRouter;
