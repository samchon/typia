import { IMetadata } from "./IMetadata";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataTemplate {
  row: IMetadata[];
  tags: IMetadataTypeTag[][];
}
