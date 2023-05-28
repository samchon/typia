import { ClassProperties } from "../typings/ClassProperties";

import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataDefinition } from "./IMetadataDefinition";
import { IMetadataTag } from "./IMetadataTag";
import { Metadata } from "./Metadata";

export class MetadataDefinition {
    public readonly name: string;
    public readonly value: Metadata;
    public readonly description: string | undefined;
    public readonly tags: IMetadataTag[];
    public readonly jsDocTags: IJsDocTagInfo[];

    /**
     * @internal
     */
    public readonly index: number;

    /**
     * @internal
     */
    public validated: boolean;

    /**
     * @internal
     */
    public nullables: boolean[] = [];

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
        this.tags = props.tags;
        this.jsDocTags = props.jsDocTags;

        this.index = props.index;
        this.validated = props.validated;
        this.nullables = [];
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
    public static _From_without_value(def: IMetadataDefinition) {
        return this.create({
            name: def.name,
            value: null!,
            description: def.description,
            tags: def.tags.slice(),
            jsDocTags: def.jsDocTags.slice(),

            index: def.index,
            validated: false,
            nullables: def.nullables.slice(),
        });
    }

    public toJSON(): IMetadataDefinition {
        return {
            name: this.name,
            value: this.value.toJSON(),
            description: this.description,
            tags: this.tags,
            jsDocTags: this.jsDocTags,

            index: this.index,
            validated: this.validated,
            nullables: this.nullables.slice(),
        };
    }
}
