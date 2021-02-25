import multer from "multer";
import routes from "../routes";
import mutlerS3 from "multer-s3";
import aws from "aws-sdk";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "ap-northeast-2",
});
const multerVideo = multer({
  storage: mutlerS3({
    s3,
    acl: "public-read",
    bucket: "jaemtube/video",
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
