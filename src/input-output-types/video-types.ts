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
  // ****** SomeVideo  **********
  id: number;
  title: string;
  author: string;
  canBeDownloaded: true;
  minAgeRestriction: null;
  createdAt: string;
  publicationDate: string;
  availableResolution: Resolutions[];
};

export type InputVideoType = {
  // ******* CreateVideoType  *********
  title: string;
  author: string;
  availableResolution: Resolutions[];
};

export type UpdateVideoType = {
  title: string;
  author: string;
  availableResolution: Resolutions[];
  canBeDownloaded: true;
  minAgeRestriction: 18;
  publicationDate: string;
};
