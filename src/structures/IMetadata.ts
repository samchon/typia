import { Atomic } from "../typings/Atomic";
import { IMetadataConstant } from "./IMetadataConstant";

export interface IMetadata {
    any: boolean;
    required: boolean;
    nullable: boolean;

    atomics: Atomic.Name[];
    constants: IMetadataConstant[];
    resolved: IMetadata | null;

    arrays: IMetadata[];
    tuples: IMetadata[][];
    objects: string[];
}
