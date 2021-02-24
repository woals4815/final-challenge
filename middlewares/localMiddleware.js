import multer from "multer";
import routes from "../routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};
const multerVideo = multer({ dest: "uploads/" });

export const uploadVideo = multerVideo.single("videoFile");
