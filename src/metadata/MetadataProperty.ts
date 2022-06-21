import { IMetadataProperty } from "../structures/IMetadataProperty";
import { ClassProperties } from "../typings/ClassProperties";
import { Metadata } from "./Metadata";
import { MetadataObject } from "./MetadataObject";

export class MetadataProperty {
    public readonly name: string;
    public readonly metadata: Metadata;
    public readonly description: string | undefined;

    /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
    /**
     * @hidden
     */
    private constructor(props: ClassProperties<MetadataProperty>) {
        this.name = props.name;
        this.metadata = props.metadata;
        this.description = props.description;
    }

    /**
     * @internal
     */
    public static create(
        props: ClassProperties<MetadataProperty>,
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
        };
    }
}
