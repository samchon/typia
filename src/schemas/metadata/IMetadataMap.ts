import type { IMetadata } from "./IMetadata";
import type { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataMap {
  key: IMetadata;
  value: IMetadata;
  tags: IMetadataTypeTag[][];
}
