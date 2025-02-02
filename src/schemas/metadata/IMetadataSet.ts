import type { IMetadata } from "./IMetadata";
import type { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataSet {
  value: IMetadata;
  tags: IMetadataTypeTag[][];
}
