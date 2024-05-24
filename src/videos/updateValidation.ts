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
  const minAgeRestriction = video?.minAgeRestriction;
  const canBeDownloaded = video.canBeDownloaded;
  const publicationDate = video.publicationDate;

  const isAuthorString = typeof video.author === "string";
  if (!isAuthorString || video.author.length > 20 || video.title.length > 40) {
    errors?.errorsMessages.push({
      message: "error!!!!",
      field: "title and author",
    });
  }
  if (minAgeRestriction < 18) {
    errors?.errorsMessages.push({
      message: "error!!!!",
      field: "min age restriction",
    });
  }
  if (canBeDownloaded !== false) {
    errors?.errorsMessages.push({
      message: "error!!!!",
      field: "can be downloaded",
    });
    if (publicationDate !== "string") {
      errors?.errorsMessages.push({
        message: "error!!!!",
        field: "publication date",
      });
      if (
        !Array.isArray(video.availableResolution) ||
        video.availableResolution.find((p) => !Resolutions[p])
      ) {
        errors?.errorsMessages.push({
          message: "error!!!!",
          field: "available resolution",
        });
      }
      return errors;
    }
  }
};
