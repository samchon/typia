import { IMetadata } from "./IMetadata";

export interface IMetadataTuple {
    name: string;
    elements: IMetadata[];

    index: number;
    recursive: boolean;
    nullables: boolean[];
}
