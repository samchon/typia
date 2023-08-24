import { MetadataAlias } from "./MetadataAlias";
import { MetadataArrayType } from "./MetadataArrayType";
import { MetadataObject } from "./MetadataObject";
import { MetadataTupleType } from "./MetadataTupleType";

/**
 * @internal
 */
export interface IMetadataDictionary {
    objects: Map<string, MetadataObject>;
    aliases: Map<string, MetadataAlias>;
    arrays: Map<string, MetadataArrayType>;
    tuples: Map<string, MetadataTupleType>;
}
