import { OutputErrorsType } from "../input-output-types/output-errors-type";
import {
  InputVideoType,
  Resolutions,
  OutputVideoType,
} from "../input-output-types/video-types";

export const inputValidation = (video: InputVideoType) => {
  const errors: OutputErrorsType = {
    // объект для сбора ошибок
    errorsMessages: [],
  };
  // ...
  const videoTitle = video?.title;
  const isAuthorString = typeof video.author === "string";
  if (!isAuthorString || video.author.length > 20) {
    errors?.errorsMessages.push({
      message: `not the right author`,
      field: "author",
    });

    if (
      videoTitle === null ||
      !videoTitle ||
      !(typeof video.title === "string") ||
      video.title.length > 40
    ) {
      errors?.errorsMessages.push({
        message: `should return error if passed body is incorrect`,
        field: "title",
      });
      //
      //
      if (
        !Array.isArray(video.availableResolutions) ||
        video.availableResolutions.find((p) => !Resolutions[p])
      ) {
        errors?.errorsMessages.push({
          message: `choose the correct format from: availableResolutions`,
          field: "availableResolutions",
        });
      }
      return errors;
    }
  }
};
