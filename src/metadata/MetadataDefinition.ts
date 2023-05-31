import { ClassProperties } from "../typings/ClassProperties";

import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataDefinition } from "./IMetadataDefinition";
import { Metadata } from "./Metadata";

export class MetadataDefinition {
    public readonly name: string;
    public readonly value: Metadata;
    public readonly description: string | null;
    public readonly jsDocTags: IJsDocTagInfo[];
    public readonly recursive: boolean;
    public readonly nullables: boolean[];

    /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
    /**
     * @hidden
     */
    private constructor(props: ClassProperties<MetadataDefinition>) {
        this.name = props.name;
        this.value = props.value;
        this.description = props.description;
        this.jsDocTags = props.jsDocTags;
        this.recursive = props.recursive;
        this.nullables = props.nullables;
    }

    /**
     * @internal
     */
    public static create(
        props: ClassProperties<MetadataDefinition>,
    ): MetadataDefinition {
        return new MetadataDefinition(props);
    }

    /**
     * @internal
     */
    public static _From_without_value(
        props: Omit<IMetadataDefinition, "value">,
    ) {
        return this.create({
            name: props.name,
            value: null!,
            description: props.description,
            recursive: props.recursive,
            jsDocTags: props.jsDocTags.slice(),
            nullables: props.nullables.slice(),
        });
    }

    public toJSON(): IMetadataDefinition {
        return {
            name: this.name,
            value: this.value.toJSON(),
            description: this.description,
            recursive: this.recursive,
            jsDocTags: this.jsDocTags,
            nullables: this.nullables.slice(),
        };
    }
}
