import { IMetadataArray } from "./IMetadataArray";
import { IMetadataDefinition } from "./IMetadataDefinition";
import { IMetadataObject } from "./IMetadataObject";
import { IMetadataTuple } from "./IMetadataTuple";

export interface IMetadataCollection {
    objects: IMetadataObject[];
    definitions: IMetadataDefinition[];
    arrays: IMetadataArray[];
    tuples: IMetadataTuple[];
}
