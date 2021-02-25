import express from "express";
import {
  getUpload,
  postUpload,
  videoDelete,
  videoDetail,
  getVideoEdit,
  postVideoEdit,
} from "../controlloers/videoControlloers";
import { uploadVideo } from "../middlewares/localMiddleware";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.videoDelete(), videoDelete);

videoRouter.get(routes.videoEdit(), getVideoEdit);
videoRouter.post(routes.videoEdit(), postVideoEdit);

export default videoRouter;
