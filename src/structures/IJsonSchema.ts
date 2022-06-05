export type IJsonSchema =
    | IJsonSchema.IUnkown
    | IJsonSchema.IEnumeration
    | IJsonSchema.IAtomic<"boolean">
    | IJsonSchema.IAtomic<"number">
    | IJsonSchema.IAtomic<"bigint">
    | IJsonSchema.IAtomic<"string">
    | IJsonSchema.IArray
    | IJsonSchema.ITuple
    | IJsonSchema.IPointer
    | IJsonSchema.IRecursivePointer
    | IJsonSchema.IOneOf;

export namespace IJsonSchema {
    export interface IConst {
        const: string | number | boolean;
        nullable?: boolean;
        description?: string;
    }
    export interface IEnumeration {
        enum: Array<string | number | boolean>;
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
    export interface ITuple extends IAtomic<"array"> {
        items: IJsonSchema[];
    }
    export interface IPointer {
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
