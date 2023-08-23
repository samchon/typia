import { Atomic } from "../../typings/Atomic";

export interface IMetadataAtomic {
    type: Atomic.Literal;
    tags: IMetadataAtomic.Tag[][];
}
export namespace IMetadataAtomic {
    export interface Tag {
        kind: string;
        value: any;
        validate: string;
    }
}
