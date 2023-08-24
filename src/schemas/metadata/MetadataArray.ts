import { $clone } from "../../functional/$clone";

import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataArray } from "./IMetadataArray";
import { IMetadataTypeTag } from "./IMetadataTypeTag";
import { MetadataArrayType } from "./MetadataArrayType";

export class MetadataArray {
    public readonly type: MetadataArrayType;
    public readonly tags: IMetadataTypeTag[][];

    /**
     * @hidden
     */
    private constructor(props: ClassProperties<MetadataArray>) {
        this.type = props.type;
        this.tags = props.tags;
    }

    public static create(props: ClassProperties<MetadataArray>): MetadataArray {
        return new MetadataArray(props);
    }

    public toJSON(): IMetadataArray {
        return {
            type: this.type.toJSON(),
            tags: $clone(this.tags),
        };
    }
}
