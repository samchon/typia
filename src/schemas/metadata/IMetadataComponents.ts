import { IMetadataAlias } from "./IMetadataAlias";
import { IMetadataArrayType } from "./IMetadataArrayType";
import { IMetadataObject } from "./IMetadataObject";
import { IMetadataTupleType } from "./IMetadataTupleType";

export interface IMetadataComponents {
    objects: IMetadataObject[];
    aliases: IMetadataAlias[];
    arrays: IMetadataArrayType[];
    tuples: IMetadataTupleType[];
}
