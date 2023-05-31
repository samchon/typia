import { ClassProperties } from "../typings/ClassProperties";

import { IMetadataArray } from "./IMetadataArray";
import { Metadata } from "./Metadata";

export class MetadataArray {
    public readonly name: string;
    public readonly value: Metadata;
    public readonly index: number;
    public readonly recursive: boolean;
    public readonly nullables: boolean[];

    /**
     * @internal
     */
    private constructor(props: ClassProperties<MetadataArray>) {
        this.name = props.name;
        this.value = props.value;
        this.index = props.index;
        this.recursive = props.recursive;
        this.nullables = props.nullables;
    }

    /**
     * @internal
     */
    public static _From_without_value(
        props: Omit<IMetadataArray, "value">,
    ): MetadataArray {
        return this.create({
            name: props.name,
            value: null!,
            index: props.index,
            recursive: props.recursive,
            nullables: props.nullables,
        });
    }

    public static create(props: ClassProperties<MetadataArray>): MetadataArray {
        return new MetadataArray(props);
    }

    public toJSON(): IMetadataArray {
        return {
            name: this.name,
            value: this.value.toJSON(),
            index: this.index,
            recursive: this.recursive,
            nullables: this.nullables,
        };
    }
}
