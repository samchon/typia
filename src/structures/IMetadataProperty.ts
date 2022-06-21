import { IMetadata } from "./IMetadata";

export interface IMetadataProperty {
    name: string;
    metadata: IMetadata;
    description?: string;
}
