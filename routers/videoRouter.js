import express from "express";
import {
  getUpload,
  postUpload,
  videoDelete,
  videoDetail,
  getVideoEdit,
  postVideoEdit,
} from "../controlloers/videoControlloers";
import { onlyUser, uploadVideo } from "../middlewares/localMiddleware";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyUser, getUpload);
videoRouter.post(routes.upload, uploadVideo, onlyUser, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.videoDelete(), videoDelete);

videoRouter.get(routes.videoEdit(), onlyUser, getVideoEdit);
videoRouter.post(routes.videoEdit(), onlyUser, postVideoEdit);

export default videoRouter;
