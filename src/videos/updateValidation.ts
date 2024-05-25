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
  const videoTitle = video.title;

  const isAuthorString = typeof video.author === "string";

  if (!isAuthorString || video.author.length > 20) {
    errors?.errorsMessages.push({
      message: `not the right author`,
      field: "author",
    });
  }
  if (typeof video.title !== "string" || video.title.length > 40) {
    errors?.errorsMessages.push({
      message: `should return error if passed body is incorrect`,
      field: "title",
    });
  }
  if (minAgeRestriction > 18 || minAgeRestriction < 1) {
    errors?.errorsMessages.push({
      message: `error!!!! minAgeRestriction must be < 18, yor minAgeRestrictio: ${minAgeRestriction}`,
      field: "minAgeRestriction",
    });
  }
  if (
    typeof canBeDownloaded !== "boolean" ||
    typeof canBeDownloaded === "string"
  ) {
    errors?.errorsMessages.push({
      message: `some boolean discription`,
      field: "canBeDownloaded",
    });
  }
  if (typeof publicationDate !== "string") {
    errors?.errorsMessages.push({
      message: `some date just a string`,
      field: "publicationDate",
    });
  }
  if (
    !Array.isArray(video.availableResolutions) ||
    video.availableResolutions.find((p) => !Resolutions[p])
  ) {
    errors?.errorsMessages.push({
      message: `choose the correct format`,
      field: "availableResolutions",
    });
  }
  return errors;
};
