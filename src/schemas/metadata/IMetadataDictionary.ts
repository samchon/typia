import { MetadataAliasType } from "./MetadataAliasType";
import { MetadataArrayType } from "./MetadataArrayType";
import { MetadataObjectType } from "./MetadataObjectType";
import { MetadataTupleType } from "./MetadataTupleType";

export interface IMetadataDictionary {
  objects: Map<string, MetadataObjectType>;
  aliases: Map<string, MetadataAliasType>;
  arrays: Map<string, MetadataArrayType>;
  tuples: Map<string, MetadataTupleType>;
}
