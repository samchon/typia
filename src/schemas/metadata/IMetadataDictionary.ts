import type { MetadataAliasType } from "./MetadataAliasType";
import type { MetadataArrayType } from "./MetadataArrayType";
import type { MetadataObjectType } from "./MetadataObjectType";
import type { MetadataTupleType } from "./MetadataTupleType";

export interface IMetadataDictionary {
  objects: Map<string, MetadataObjectType>;
  aliases: Map<string, MetadataAliasType>;
  arrays: Map<string, MetadataArrayType>;
  tuples: Map<string, MetadataTupleType>;
}
