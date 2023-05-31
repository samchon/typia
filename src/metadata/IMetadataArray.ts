import { IMetadata } from "./IMetadata";

export interface IMetadataArray {
    name: string;
    value: IMetadata;

    index: number;
    recursive: boolean;
    nullables: boolean[];
}
