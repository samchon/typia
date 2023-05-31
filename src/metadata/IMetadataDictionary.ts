import { MetadataArray } from "./MetadataArray";
import { MetadataDefinition } from "./MetadataDefinition";
import { MetadataObject } from "./MetadataObject";
import { MetadataTuple } from "./MetadataTuple";

/**
 * @internal
 */
export interface IMetadataDictionary {
    objects: Map<string, MetadataObject>;
    definitions: Map<string, MetadataDefinition>;
    arrays: Map<string, MetadataArray>;
    tuples: Map<string, MetadataTuple>;
}
