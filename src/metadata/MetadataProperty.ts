import { ClassProperties } from "../typings/ClassProperties";

import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataProperty } from "./IMetadataProperty";
import { IMetadataTag } from "./IMetadataTag";
import { Metadata } from "./Metadata";
import { MetadataObject } from "./MetadataObject";

export class MetadataProperty {
    public readonly name: string;
    public readonly metadata: Metadata;
    public readonly description: string | undefined;
    public readonly tags: IMetadataTag[];
    public readonly jsDocTags: IJsDocTagInfo[];

    /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
    /**
     * @hidden
     */
    private constructor(
        props: Omit<ClassProperties<MetadataProperty>, "tags" | "jsDocTags">,
    ) {
        this.name = props.name;
        this.metadata = props.metadata;
        this.description = props.description;
        this.tags = [];
        this.jsDocTags = [];
    }

    /**
     * @internal
     */
    public static create(
        props: Omit<ClassProperties<MetadataProperty>, "tags" | "jsDocTags">,
    ): MetadataProperty {
        return new MetadataProperty(props);
    }

    /**
     * @internal
     */
    public static _From(
        property: IMetadataProperty,
        objects: Map<string, MetadataObject>,
    ) {
        const obj = this.create({
            name: property.name,
            metadata: Metadata._From(property.metadata, objects),
            description: property.description,
        });
        obj.tags.push(...property.tags.slice());
        obj.jsDocTags.push(...property.jsDocTags.slice());
        return obj;
    }

    public toJSON(): IMetadataProperty {
        return {
            name: this.name,
            metadata: this.metadata.toJSON(),
            description: this.description,
            tags: this.tags,
            jsDocTags: this.jsDocTags,
        };
    }
}
