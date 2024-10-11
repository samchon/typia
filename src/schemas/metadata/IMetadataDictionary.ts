import { MetadataAlias } from "./MetadataAlias";
import { MetadataArrayType } from "./MetadataArrayType";
import { MetadataObjectType } from "./MetadataObjectType";
import { MetadataTupleType } from "./MetadataTupleType";

export interface IMetadataDictionary {
  objects: Map<string, MetadataObjectType>;
  aliases: Map<string, MetadataAlias>;
  arrays: Map<string, MetadataArrayType>;
  tuples: Map<string, MetadataTupleType>;
}
