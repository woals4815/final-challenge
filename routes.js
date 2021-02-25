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
const USER = "/users";
const USER_DETAIL = "/:id";
//뒤에 :id를 붙여야 router에서는 id를 안 받으니까 이해하고 GET 할 수 있다. 삽질 오지게 했다;;
const EDIT_PROFILE = "/:id/edit-profile";
const ME = "/me";
const LOGOUT = "/logout";

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
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: (id) => {
    if (id) {
      return `/users/${id}/edit-profile`;
    } else {
      return EDIT_PROFILE;
    }
  },
  me: ME,
  logout: LOGOUT,
};

export default routes;
