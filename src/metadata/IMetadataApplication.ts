import { IMetadata } from "./IMetadata";
import { IMetadataObject } from "./IMetadataObject";

export interface IMetadataApplication {
    metadatas: IMetadata[];
    collection: IMetadataObject[];
}
