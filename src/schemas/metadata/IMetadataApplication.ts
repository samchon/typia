import { IMetadata } from "./IMetadata";
import { IMetadataCollection } from "./IMetadataCollection";

export interface IMetadataApplication {
    metadatas: IMetadata[];
    collection: IMetadataCollection;
}
