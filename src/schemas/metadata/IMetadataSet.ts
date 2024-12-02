import { IMetadata } from "./IMetadata";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataSet {
  value: IMetadata;
  tags: IMetadataTypeTag[][];
}
