import { Response, Request } from "express";
import { OutputErrorsType } from "../input-output-types/output-errors-type";
import { db } from "../db/db";
import {
  InputVideoType,
  Resolutions,
  OutputVideoType,
} from "../input-output-types/video-types";
import { inputValidation } from "./inputValidation";

export const createVideoController = (
  req: Request<any, any, InputVideoType>,
  res: Response<any /*OutputVideoType | OutputErrorsType*/>
) => {
  const errors = inputValidation(req.body);
  if (errors?.errorsMessages.length) {
    // если есть ошибки - отправляем ошибки
    res.status(400).json(errors); // если тип видео не соответствует заданным значениям
    return;
  }

  const nowDate = new Date();
  const plusOneDay = nowDate.setDate(nowDate.getDate() + 1);
  // если всё ок - добавляем видео
  const newVideo /*VideoType */ = {
    ...req.body,
    id: Date.now() + Math.random(),
    title: "String",
    author: "string",
    canBeDownloaded: false,
    minAgeRestriction: Number,
    createdAt: nowDate.toISOString,
    publicationDate: plusOneDay,
    availableResolutions: Resolutions,
  };
  db.videos.push(newVideo);

  res.status(201).json(newVideo);
};
