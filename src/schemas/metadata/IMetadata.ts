import { IMetadataAtomic } from "./IMetadataAtomic";
import { IMetadataConstant } from "./IMetadataConstant";
import { IMetadataEntry } from "./IMetadataEntry";
import { IMetadataEscaped } from "./IMetadataEscaped";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

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
    arrays: {
        name: string;
        tags: IMetadataTypeTag[][];
    }[];
    tuples: {
        name: string;
        tags: IMetadataTypeTag[][];
    }[];
    objects: string[];
    aliases: string[];

    natives: string[];
    sets: IMetadata[];
    maps: IMetadataEntry[];
}
