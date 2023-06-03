import { IMetadataAlias } from "./IMetadataAlias";
import { IMetadataArray } from "./IMetadataArray";
import { IMetadataObject } from "./IMetadataObject";
import { IMetadataTuple } from "./IMetadataTuple";

export interface IMetadataCollection {
    objects: IMetadataObject[];
    aliases: IMetadataAlias[];
    arrays: IMetadataArray[];
    tuples: IMetadataTuple[];
}
