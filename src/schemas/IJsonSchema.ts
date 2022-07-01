import { Atomic } from "../typings/Atomic";

export type IJsonSchema =
    | IJsonSchema.IEnumeration<"boolean">
    | IJsonSchema.IEnumeration<"number">
    | IJsonSchema.IEnumeration<"bigint">
    | IJsonSchema.IEnumeration<"string">
    | IJsonSchema.IAtomic<"boolean">
    | IJsonSchema.IAtomic<"number">
    | IJsonSchema.IAtomic<"bigint">
    | IJsonSchema.IAtomic<"string">
    | IJsonSchema.IArray
    | IJsonSchema.ITuple
    | IJsonSchema.IReference
    | IJsonSchema.IRecursiveReference
    | IJsonSchema.IOneOf
    | IJsonSchema.IUnkown;

export namespace IJsonSchema {
    export interface IEnumeration<Type extends Atomic.Literal> {
        type: Atomic.Literal;
        enum: Array<Atomic.Mapper[Type]>;
        nullable: boolean;
        description?: string;
    }
    export interface IAtomic<Type extends string> {
        type: Type;
        nullable: boolean;
        description?: string;
    }

    export interface IArray extends IAtomic<"array"> {
        items: IJsonSchema;
    }
    export interface ITuple {
        type: "array";
        nullable: boolean;
        items: IJsonSchema[];
        description?: string;
    }
    export interface IReference {
        $ref: string;
        description?: string;
    }
    export interface IRecursiveReference {
        $recursiveRef: string;
        description?: string;
    }

    export interface IOneOf {
        oneOf: IJsonSchema[];
        description?: string;
    }
    export interface IUnkown {}
}
