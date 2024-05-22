import { Request, Response } from "express";
import { db } from "../db/db";
import { OutputErrorsType } from "../input-output-types/output-errors-type";
import {
  UpdateVideoType,
  Resolutions,
} from "../input-output-types/video-types";

export const updateVideosController = (
  req: Request<any, any, UpdateVideoType>,
  res: Response<any, OutputErrorsType>
) => {
  const videos = db.videos; // получаем видео из базы данных

  res.status(200).json(videos); // отдаём видео в качестве ответа
};
