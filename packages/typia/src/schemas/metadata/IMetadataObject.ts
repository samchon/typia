import { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataObject {
  name: string;
  tags: IMetadataTypeTag[][];
}
