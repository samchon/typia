import { IMetadata } from "./IMetadata";
import { IMetadataTag } from "./IMetadataTag";

export interface IMetadataProperty {
    name: string;
    metadata: IMetadata;
    description?: string;
    tags: IMetadataTag[];
}
