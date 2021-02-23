//Global
const HOME = "/";
const LOGIN = "/login";
const JOIN = "/join";
const SEARCH = "/search";

//Video
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";

//User
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

const routes = {
  home: HOME,
  login: LOGIN,
  join: JOIN,
  search: SEARCH,
  videos: VIDEOS,
  upload: UPLOAD,
  user: USER,
  upload: UPLOAD,
};

export default routes;
