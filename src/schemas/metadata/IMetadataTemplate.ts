import type { IMetadata } from "./IMetadata";
import type { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataTemplate {
  row: IMetadata[];
  tags: IMetadataTypeTag[][];
}
