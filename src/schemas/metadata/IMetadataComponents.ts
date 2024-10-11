import { IMetadataAlias } from "./IMetadataAlias";
import { IMetadataArrayType } from "./IMetadataArrayType";
import { IMetadataObjectType } from "./IMetadataObjectType";
import { IMetadataTupleType } from "./IMetadataTupleType";

export interface IMetadataComponents {
  objects: IMetadataObjectType[];
  aliases: IMetadataAlias[];
  arrays: IMetadataArrayType[];
  tuples: IMetadataTupleType[];
}
