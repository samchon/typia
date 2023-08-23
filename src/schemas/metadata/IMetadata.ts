import { IMetadataAtomic } from "./IMetadataAtomic";
import { IMetadataConstant } from "./IMetadataConstant";
import { IMetadataEntry } from "./IMetadataEntry";
import { IMetadataEscaped } from "./IMetadataEscaped";

export interface IMetadata {
    any: boolean;
    required: boolean;
    optional: boolean;
    nullable: boolean;
    functional: boolean;

    atomics: IMetadataAtomic[];
    constants: IMetadataConstant[];
    templates: IMetadata[][];
    escaped: IMetadataEscaped | null;

    rest: IMetadata | null;
    arrays: string[];
    tuples: string[];
    objects: string[];
    aliases: string[];

    natives: string[];
    sets: IMetadata[];
    maps: IMetadataEntry[];
}
