export enum Resolutions {
  P144 = "P144",
  P240 = "P240",
  P360 = "P360",
  P480 = "P480",
  P720 = "P720",
  P1080 = "P1080",
  P1440 = "P1440",
  P2160 = "P2160",
}

export type ResolutionsString = keyof typeof Resolutions;
// const x = Resolutions.P144
// const y = Resolutions[x]
// const z = Resolutions['P144']

export type OutputVideoType = {
  // ****** Типизированное видео res **********
  id: Number;
  title: string;
  author: string;
  canBeDownloaded: false;
  minAgeRestriction: 18;
  createdAt: string;
  publicationDate: string;
  availableResolution: Resolutions[];
};

export type InputVideoType = {
  // ******* CreateVideoType req *********
  title: string;
  author: string;
  availableResolutions: Resolutions[];
  publicationDate?: string;
};

export type UpdateVideoType = {
  // обновляем видео согласно типизации
  title: string;
  author: string;
  availableResolutions: Resolutions[];
  canBeDownloaded: boolean;
  minAgeRestriction: number;
  publicationDate: string;
};
