import { Request, Response } from "express";
import { db } from "../db/db";

export const deleteVideoController = (
  req: Request,
  res: Response<any /*OutputVideoType*/>
) => {
  //
  const id = +req.params.id;
  const deleteVideo = db.videos.filter((v) => v.id !== id);
  if (deleteVideo.length < db.videos.length) {
    db.videos = deleteVideo;
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

export const deleteDatabase = (req: Request, res: Response) => {
  db.videos = [];
  res.sendStatus(204);
  console.log("All data is deleted");
};
