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
  const video = await Video.findById(id)
    .populate("creator")
    .populate("comments");
  console.log(video._id);
  res.render("videoDetail", { video });
};

export const videoDelete = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator.toString() !== req.user.id) {
      res.redirect(routes.home);
    } else {
      await Video.findByIdAndDelete(id);
    }
    res.redirect(routes.home);
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getVideoEdit = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoEdit", { video });
  } catch (error) {
    console.log(error);
    res.redirect(videoDetail(id));
  }
};
export const postVideoEdit = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator.toString() !== req.user.id) {
      res.redirect(routes.videoDetail(id));
    } else {
      await Video.findByIdAndUpdate(id, { title, description });
      console.log(video);
      res.redirect(routes.home);
    }
  } catch (error) {
    res.redirect(routes.videoEdit(id));
    console.log(error);
  }
};
