export type IJsonSchema =
    | IJsonSchema.IEnumeration
    | IJsonSchema.IAtomic<"boolean">
    | IJsonSchema.IAtomic<"number">
    | IJsonSchema.IAtomic<"bigint">
    | IJsonSchema.IAtomic<"string">
    | IJsonSchema.IArray
    | IJsonSchema.ITuple
    | IJsonSchema.IReference
    | IJsonSchema.IRecursivePointer
    | IJsonSchema.IOneOf
    | IJsonSchema.IUnkown;

export namespace IJsonSchema {
    export interface IEnumeration {
        enum: Array<string | number | boolean | bigint>;
        nullable?: boolean;
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
    export interface IRecursivePointer {
        $recursiveRef: string;
        description?: string;
    }

    export interface IOneOf {
        oneOf: IJsonSchema[];
        description?: string;
    }
    export interface IUnkown {}
}
