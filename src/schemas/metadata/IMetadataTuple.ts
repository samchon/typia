import { IMetadataTupleType } from "./IMetadataTupleType";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataTuple {
    type: IMetadataTupleType;
    tags: IMetadataTypeTag[][];
}
