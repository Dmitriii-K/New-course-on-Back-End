import { Request, Response } from "express";
import { db } from "../db/db";
import { OutputErrorsType } from "../input-output-types/output-errors-type";
import {
  UpdateVideoType,
  Resolutions,
  OutputVideoType,
} from "../input-output-types/video-types";
import { updateValidation } from "./updateValidation";

export const updateVideosController = (
  req: Request<any, any, UpdateVideoType>,
  res: Response<OutputVideoType | OutputErrorsType>
) => {
  for (let i = 0; i < db.videos.length; i++) {
    // если видео не найдено выдаем ошибку
    const video = db.videos[i];
    if (video === !req.params.id) {
      res.sendStatus(404);
      return;
    }
    const errors = updateValidation(req.body); // если есть ошибки в типизации- отправляем ошибки
    if (errors.errorsMessages.length) {
      res.status(400).json(errors); // если тип видео не соответствует заданным значениям
      return;
    }
    // если все ок обновляем видео
    video.body = req.body;
    res.status(204).json(video); // без содержания
  }
};
