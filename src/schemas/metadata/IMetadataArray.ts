import { IMetadataArrayType } from "./IMetadataArrayType";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataArray {
    type: IMetadataArrayType;
    tags: IMetadataTypeTag[][];
}
