import { Router } from "express";
import { getVideosController } from "./getVideosController";
import { createVideoController } from "./createVideoController";
import { findVideoController } from "./findVideoController";
import { updateVideosController } from "./updateVideosController";
import { deleteVideoController, deleteDatabase } from "./deleteVideoController";

export const videosRouter = Router();

videosRouter.get("/", getVideosController);
videosRouter.post("/", createVideoController);
videosRouter.get("/:id", findVideoController);
videosRouter.put("/:id", updateVideosController);
videosRouter.delete("/:id", deleteVideoController);
videosRouter.delete("/testing/all-data", deleteDatabase);
// ...

// не забудьте добавить роут в апп
