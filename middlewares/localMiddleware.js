import multer from "multer";
import routes from "../routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube";
  res.locals.routes = routes;
  res.locals.loggedUser = true;
  next();
};
const multerVideo = multer({ dest: "uploads/" });

export const uploadVideo = multerVideo.single("videoFile");
