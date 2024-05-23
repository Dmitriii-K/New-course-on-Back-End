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
  const videos = db.videos.find((p) => p.id === +req.params.id);
  if (videos) {
    res.status(200).json(videos); // если id видео находится возвращаем видно
  } else {
    res.status(404); // если id видео не существуем выводим ошибку
  }
};
