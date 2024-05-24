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
  if (
    !video?.title ||
    typeof video.title !== "string" ||
    video.title.length > 40
  ) {
    errors.errorsMessages.push({
      message: "error!!!!",
      field: "title",
    });
    if (typeof video.author !== "string" || video.author.length > 20) {
      errors.errorsMessages.push({
        message: "error!!!!",
        field: "author",
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
