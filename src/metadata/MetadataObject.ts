import { ClassProperties } from "../typings/ClassProperties";

import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataObject } from "./IMetadataObject";
import { MetadataProperty } from "./MetadataProperty";

export class MetadataObject {
    public readonly name: string;
    public readonly properties: Array<MetadataProperty>;
    public readonly description: string | undefined;
    public readonly jsDocTags: IJsDocTagInfo[];

    public readonly index: number;
    public validated: boolean;
    public recursive: boolean;
    public nullables: boolean[] = [];

    /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
    /**
     * @hidden
     */
    private constructor(props: ClassProperties<MetadataObject>) {
        this.name = props.name;
        this.properties = props.properties;
        this.description = props.description;
        this.jsDocTags = props.jsDocTags;

        this.index = props.index;
        this.validated = props.validated;
        this.recursive = props.recursive;
        this.nullables = [];
    }

    /**
     * @internal
     */
    public static create(props: ClassProperties<MetadataObject>) {
        return new MetadataObject(props);
    }

    /**
     * @internal
     */
    public static _From_without_properties(
        obj: IMetadataObject,
    ): MetadataObject {
        return this.create({
            name: obj.name,
            properties: [],
            description: obj.description,
            jsDocTags: obj.jsDocTags,

            index: obj.index,
            validated: obj.validated,
            recursive: obj.recursive,
            nullables: obj.nullables.slice(),
        });
    }

    /**
     * @internal
     */
    public _Is_simple(level: number = 0): boolean {
        return (
            this.recursive === false &&
            this.properties.length < 10 &&
            this.properties.every(
                (property) =>
                    property.key.isSoleLiteral() &&
                    property.value.size() === 1 &&
                    property.value.required === true &&
                    property.value.nullable === false &&
                    (property.value.atomics.length === 1 ||
                        (level < 1 &&
                            property.value.objects.length === 1 &&
                            property.value.objects[0]!._Is_simple(level + 1))),
            )
        );
    }

    public toJSON(): IMetadataObject {
        return {
            name: this.name,
            properties: this.properties.map((property) => property.toJSON()),
            description: this.description,
            jsDocTags: this.jsDocTags,

            index: this.index,
            validated: this.validated,
            recursive: this.recursive,
            nullables: this.nullables.slice(),
        };
    }
}

/**
 * @internal
 */
export namespace MetadataObject {
    export const intersects = (x: MetadataObject, y: MetadataObject): boolean =>
        x.properties.some(
            (prop) =>
                y.properties.find(
                    (oppo) => prop.key.getName() === oppo.key.getName(),
                ) !== undefined,
        );

    export const covers = (x: MetadataObject, y: MetadataObject): boolean =>
        x.properties.length >= y.properties.length &&
        x.properties.every(
            (prop) =>
                y.properties.find(
                    (oppo) => prop.key.getName() === oppo.key.getName(),
                ) !== undefined,
        );
}