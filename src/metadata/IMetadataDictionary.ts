import { MetadataAlias } from "./MetadataAlias";
import { MetadataArray } from "./MetadataArray";
import { MetadataObject } from "./MetadataObject";
import { MetadataTuple } from "./MetadataTuple";

/**
 * @internal
 */
export interface IMetadataDictionary {
    objects: Map<string, MetadataObject>;
    aliases: Map<string, MetadataAlias>;
    arrays: Map<string, MetadataArray>;
    tuples: Map<string, MetadataTuple>;
}
