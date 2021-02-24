import Video from "../models/Video";
import routes from "../routes";

export const getUpload = (req, res) => {
  res.render("upload");
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
    user,
  } = req;
  const newVideo = await Video.create({
    title,
    description,
    fileUrl: path,
    creator: req.user.id,
  });
  req.user.videos.push(newVideo);
  req.user.save();
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  const video = await Video.findById(id);
  console.log(video);
  res.render("videoDetail", { video });
};
