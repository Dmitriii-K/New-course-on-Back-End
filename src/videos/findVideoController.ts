import { Request, Response } from "express";
import { db } from "../db/db";
import {
  OutputVideoType,
  Resolutions,
} from "../input-output-types/video-types";

export const findVideoController = (
  req: Request,
  res: Response<any, OutputVideoType>
) => {
  const videos = db.videos;

  res.status(200).json(videos);
};
