import multer from "multer";
import routes from "../routes";
import multerS3 from "multer-s3";
import dotenv from "dotenv";
import aws from "aws-sdk";

dotenv.config();

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "ap-northeast-1",
});
const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "jaemtube2/video",
  }),
});

export const uploadVideo = multerVideo.single("videoFile");
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};
export const onlyUser = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
