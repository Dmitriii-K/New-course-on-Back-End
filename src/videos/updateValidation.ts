import { OutputErrorsType } from "../input-output-types/output-errors-type";
import { db } from "../db/db";
import {
  UpdateVideoType,
  Resolutions,
  OutputVideoType,
} from "../input-output-types/video-types";

export const updateValidation = (video: UpdateVideoType) => {
  const errors: OutputErrorsType = {
    // объект для сбора ошибок
    errorsMessages: [],
  };
  // ...
  video = db.videos;
  const isTitle = typeof video.body.title === "string";
  const isAuthorString = typeof video.author === "string";
  if (!isAuthorString || video.author.length > 20 || isTitle > 40) {
    errors.errorsMessages.push({
      message: "error!!!!",
      field: "title and author",
    });
  }
  if (minAgeRestriction < 18) {
    errors.errorsMessages.push({
      message: "error!!!!",
      field: "age restriction",
    });
  }
  if (canBeDownloaded !== false) {
    errors.errorsMessages.push({
      message: "error!!!!",
      field: "age restriction",
    });
    if (publicationDate !== "string") {
      errors.errorsMessages.push({
        message: "error!!!!",
        field: "age restriction",
      });
      if (
        !Array.isArray(video.availableResolution) ||
        video.availableResolution.find((p) => !Resolutions[p])
      ) {
        errors.errorsMessages.push({
          message: "error!!!!",
          field: "availableResolution",
        });
      }
      return errors;
    }
  }
};
