import { IMetadata } from "./IMetadata";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataMap {
  key: IMetadata;
  value: IMetadata;
  tags: IMetadataTypeTag[][];
}
