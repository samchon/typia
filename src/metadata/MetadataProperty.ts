import { ClassProperties } from "../typings/ClassProperties";

import { IMetadataProperty } from "./IMetadataProperty";
import { IMetadataTag } from "./IMetadataTag";
import { Metadata } from "./Metadata";
import { MetadataObject } from "./MetadataObject";

export class MetadataProperty {
    public readonly name: string;
    public readonly metadata: Metadata;
    public readonly description: string | undefined;
    public readonly tags: IMetadataTag[];

    /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
    /**
     * @hidden
     */
    private constructor(
        props: Omit<ClassProperties<MetadataProperty>, "tags">,
    ) {
        this.name = props.name;
        this.metadata = props.metadata;
        this.description = props.description;
        this.tags = [];
    }

    /**
     * @internal
     */
    public static create(
        props: Omit<ClassProperties<MetadataProperty>, "tags">,
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
        return this.create({
            name: property.name,
            metadata: Metadata._From(property.metadata, objects),
            description: property.description,
        });
    }

    public toJSON(): IMetadataProperty {
        return {
            name: this.name,
            metadata: this.metadata.toJSON(),
            description: this.description,
            tags: this.tags,
        };
    }
}
