import { ClassProperties } from "../../typings/ClassProperties";

import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataDictionary } from "./IMetadataDictionary";
import { IMetadataProperty } from "./IMetadataProperty";
import { Metadata } from "./Metadata";

export class MetadataProperty {
    public readonly key: Metadata;
    public readonly value: Metadata;
    public readonly description: string | null;
    public readonly jsDocTags: IJsDocTagInfo[];

    /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
    /**
     * @hidden
     */
    private constructor(props: ClassProperties<MetadataProperty>) {
        this.key = props.key;
        this.value = props.value;
        this.description = props.description;
        this.jsDocTags = props.jsDocTags;
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
        dict: IMetadataDictionary,
    ) {
        return this.create({
            key: Metadata._From(property.key, dict),
            value: Metadata._From(property.value, dict),
            description: property.description,
            jsDocTags: property.jsDocTags.slice(),
        });
    }

    public toJSON(): IMetadataProperty {
        return {
            key: this.key.toJSON(),
            value: this.value.toJSON(),
            description: this.description,
            jsDocTags: this.jsDocTags,
        };
    }
}
