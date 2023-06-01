import { IMetadata } from "./IMetadata";

export interface IMetadataArray {
    name: string;
    value: IMetadata;

    nullables: boolean[];
    recursive: boolean;
    index: number | null;
}
