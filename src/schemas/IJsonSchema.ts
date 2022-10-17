import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../metadata/IMetadataTag";

import { Atomic } from "../typings/Atomic";

export type IJsonSchema = IJsonSchema.NotUnknown | IJsonSchema.IUnkown;
export namespace IJsonSchema {
    export type NotUnknown =
        | IEnumeration<"boolean">
        | IEnumeration<"number">
        | IEnumeration<"bigint">
        | IEnumeration<"string">
        | IBoolean
        | INumber
        | IBigInt
        | IString
        | IArray
        | ITuple
        | IOneOf
        | IReference
        | IRecursiveReference
        | INullOnly;

    /* -----------------------------------------------------------
        ATOMICS
    ----------------------------------------------------------- */
    export interface IEnumeration<Literal extends Atomic.Literal>
        extends IAtomic<Literal> {
        enum: Array<Atomic.Mapper[Literal]>;
    }
    export interface IAtomic<Literal extends Atomic.Literal>
        extends IAttribute {
        type: Literal;
        nullable: boolean;
        default?: Atomic.Mapper[Literal];
    }
    export interface IString extends IAtomic<"string"> {
        minLength?: number;
        maxLength?: number;
        pattern?: string;
        format?: string;
    }
    export interface INumber extends IAtomic<"number" | "integer"> {
        minimum?: number;
        maximum?: number;
        exclusiveMinimum?: number;
        exclusiveMaximum?: number;
    }
    export interface IBoolean extends IAtomic<"boolean"> {}
    export interface IBigInt extends IAtomic<"bigint"> {}

    /* -----------------------------------------------------------
        OBJECTS
    ----------------------------------------------------------- */
    export interface IArray extends ISignificant<"array"> {
        items: IJsonSchema;
        minItems?: number;
        maxItems?: number;
    }
    export interface ITuple extends ISignificant<"array"> {
        items: IJsonSchema[];
    }
    export interface IReference extends IAttribute {
        $ref: string;
    }
    export interface IRecursiveReference extends IAttribute {
        $recursiveRef: string;
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
    export interface IUnkown {}

    export interface ISignificant<Literal extends string> {
        type: Literal;
        nullable: boolean;
    }
    export interface IAttribute {
        description?: string;
        "x-tson-metaTags"?: IMetadataTag[];
        "x-tson-jsDocTags"?: IJsDocTagInfo[];
    }
}
