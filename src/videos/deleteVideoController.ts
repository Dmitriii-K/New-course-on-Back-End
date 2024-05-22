import { Request, Response } from "express";
import { db } from "../db/db";

export const deleteVideoController = (
  req: Request,
  res: Response<any /*OutputVideoType[]*/>
) => {
  const videos = db.videos;

  res.status(200).json(videos);
};