import type { IMetadataAliasType } from "./IMetadataAliasType";
import type { IMetadataArrayType } from "./IMetadataArrayType";
import type { IMetadataObjectType } from "./IMetadataObjectType";
import type { IMetadataTupleType } from "./IMetadataTupleType";

export interface IMetadataComponents {
  objects: IMetadataObjectType[];
  aliases: IMetadataAliasType[];
  arrays: IMetadataArrayType[];
  tuples: IMetadataTupleType[];
}
