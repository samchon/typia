import { IMetadataApplication } from "../schemas/metadata/IMetadataApplication";
import { MetadataApplication } from "../schemas/metadata/MetadataApplication";

export const $from = (json: IMetadataApplication): MetadataApplication =>
  MetadataApplication.from(json);
