import { Request, Response } from "express";
import { db } from "../db/db";

export const deleteVideoController = (
  req: Request,
  res: Response<any /*OutputVideoType*/>
) => {
  for (let i = 0; i < db.videos.length; i++) {
    const video = db.videos[i];
    if (video === +req.params.id) {
      video.splice(i, 1);
      res.status(204); // если id видео находится удаляем его
      return;
    }
  }
  res.status(404); // если id видео не существуем выводим ошибку
};
