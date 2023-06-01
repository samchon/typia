import { IMetadata } from "./IMetadata";

export interface IMetadataTuple {
    name: string;
    elements: IMetadata[];

    index: number | null;
    recursive: boolean;
    nullables: boolean[];
}
