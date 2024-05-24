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
  let foundVideo;
  for (let i = 0; i < db.videos.length; i++) {
    // если видео не найдено выдаем ошибку
    const video = db.videos[i];
    if (video.id.toString() === req.params.id) {
      foundVideo = video;
    }
  }

  if (!foundVideo) {
    return res.sendStatus(404);
  }
  const errors = updateValidation(req.body); // если есть ошибки в типизации- отправляем ошибки
  if (errors?.errorsMessages.length) {
    res.status(400).json(errors); // если тип видео не соответствует заданным значениям
    return;
  }
  // если все ок обновляем видео
  foundVideo.title = req.body.title;
  foundVideo.author = req.body.author;
  foundVideo.canBeDownloaded = req.body.canBeDownloaded;
  foundVideo.minAgeRestriction = req.body.minAgeRestriction;
  foundVideo.publicationDate = req.body.publicationDate;
  foundVideo.availableResolutions = req.body.availableResolutions;
  res.sendStatus(204); // без содержания
  return;
};
