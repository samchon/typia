import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";
import { IMetadataTypeTag } from "../metadata/IMetadataTypeTag";

import { Atomic } from "../../typings/Atomic";

import { Type } from "../../tags/Type";

export type IJsonSchema = IJsonSchema.Known | IJsonSchema.IUnknown;
export namespace IJsonSchema {
    export type Known =
        | IEnumeration<"boolean">
        | IEnumeration<"number">
        | IEnumeration<"string">
        | IBoolean
        | IInteger
        | INumber
        | IString
        | IArray
        | ITuple
        | IOneOf
        | IReference
        | INullOnly;

    export interface IUnknown extends IAttribute {
        type?: undefined;
    }

    /* -----------------------------------------------------------
        ATOMICS
    ----------------------------------------------------------- */
    export interface IEnumeration<
        Literal extends Exclude<Atomic.Literal, "bigint">,
    > extends Omit<IAtomic<Literal>, "x-typia-typeTags"> {
        enum: Array<Atomic.Mapper[Literal]>;
    }
    export interface IAtomic<Literal extends Exclude<Atomic.Literal, "bigint">>
        extends ISignificant<Literal> {
        default?: Atomic.Mapper[Literal];
    }
    export interface IString extends IAtomic<"string"> {
        minLength?: number & Type<"uint32">;
        maxLength?: number & Type<"uint32">;
        pattern?: string;
        format?: string;
        "x-typia-typeTags"?: IMetadataTypeTag[];
    }
    export interface INumber extends IAtomic<"number"> {
        minimum?: number;
        maximum?: number;
        exclusiveMinimum?: boolean;
        exclusiveMaximum?: boolean;
        multipleOf?: number;
        "x-typia-typeTags"?: IMetadataTypeTag[];
    }
    export interface IInteger extends IAtomic<"integer"> {
        minimum?: number & Type<"int32">;
        maximum?: number & Type<"int32">;
        exclusiveMinimum?: boolean;
        exclusiveMaximum?: boolean;
        multipleOf?: number & Type<"int32">;
        "x-typia-typeTags"?: IMetadataTypeTag[];
    }
    export interface IBoolean extends IAtomic<"boolean"> {}

    /* -----------------------------------------------------------
        OBJECTS
    ----------------------------------------------------------- */
    export interface IArray extends ISignificant<"array"> {
        items: IJsonSchema;
        minItems?: number & Type<"uint32">;
        maxItems?: number & Type<"uint32">;
        "x-typia-tuple"?: ITuple;
    }
    export interface ITuple extends ISignificant<"array"> {
        items: IJsonSchema[];
        minItems: number & Type<"uint32">;
        maxItems?: number & Type<"uint32">;
    }
    export interface IReference extends IAttribute {
        $ref: string;
    }
    export interface INullOnly extends IAttribute {
        type: "null";
    }

    /* -----------------------------------------------------------
        MISCELLANEOUS
    ----------------------------------------------------------- */
    export interface IOneOf extends IAttribute {
        oneOf: IJsonSchema[];
    }

    export interface ISignificant<Literal extends string> extends IAttribute {
        type: Literal;

        /**
         * Only when swagger mode.
         */
        nullable?: boolean;
    }
    export interface IAttribute {
        deprecated?: boolean;
        title?: string;
        description?: string;
        "x-typia-jsDocTags"?: IJsDocTagInfo[];
        "x-typia-required"?: boolean;
        "x-typia-optional"?: boolean;
        "x-typia-rest"?: boolean;
    }
}
