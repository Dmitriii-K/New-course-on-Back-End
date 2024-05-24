import { Response, Request } from "express";
import { OutputErrorsType } from "../input-output-types/output-errors-type";
import { db } from "../db/db";
import {
  InputVideoType,
  Resolutions,
  OutputVideoType,
} from "../input-output-types/video-types";
import { inputValidation } from "./inputValidation";
import { addDays } from "date-fns";

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
  //const plusOneDay = nowDate.setDate(nowDate.getDate() + 1).;
  const plusOneDay = addDays(nowDate, 1).toISOString();
  // если всё ок - добавляем видео
  const newVideo /*VideoType */ = {
    id: Date.now() + Math.random(),
    title: req.body.title,
    author: req.body.author,
    canBeDownloaded: false,
    minAgeRestriction: null,
    createdAt: nowDate.toISOString(),
    publicationDate: req.body.publicationDate ?? plusOneDay,
    availableResolutions: req.body.availableResolutions,
  };

  db.videos.push(newVideo);

  res.status(201).json(newVideo);
};
