import { IMetadataAliasType } from "./IMetadataAliasType";
import { IMetadataArrayType } from "./IMetadataArrayType";
import { IMetadataObjectType } from "./IMetadataObjectType";
import { IMetadataTupleType } from "./IMetadataTupleType";

export interface IMetadataComponents {
  objects: IMetadataObjectType[];
  aliases: IMetadataAliasType[];
  arrays: IMetadataArrayType[];
  tuples: IMetadataTupleType[];
}
