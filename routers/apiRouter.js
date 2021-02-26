import express from "express";
import { addComment, registerView } from "../controlloers/videoControlloers";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, registerView);
apiRouter.post(routes.addComment, addComment);

export default apiRouter;
