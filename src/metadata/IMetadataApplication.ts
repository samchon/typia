import { IMetadata } from "./IMetadata";
import { IMetadataDefinition } from "./IMetadataDefinition";
import { IMetadataObject } from "./IMetadataObject";

export interface IMetadataApplication {
    metadatas: IMetadata[];
    objects: IMetadataObject[];
    definitions: IMetadataDefinition[];
}
