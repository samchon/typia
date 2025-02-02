import type { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataObject {
  name: string;
  tags: IMetadataTypeTag[][];
}
