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
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  videoEdit: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return VIDEO_EDIT;
    }
  },
  videoDelete: (id) => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return VIDEO_DELETE;
    }
  },
  userDetail: (id) => {
    if (id) {
      return `/user/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: (id) => {
    if (id) {
      return `/user/${id}/edit-profile`;
    } else {
      return EDIT_PROFILE;
    }
  },
  me: ME,
};

export default routes;
