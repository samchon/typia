export type IMetadataTag =
    // ARRAY
    | IMetadataTag.IItems
    | IMetadataTag.IMinItems
    | IMetadataTag.IMaxItems
    // STRING
    | IMetadataTag.IFormat
    | IMetadataTag.IPattern
    | IMetadataTag.ILength
    | IMetadataTag.IMinLength
    | IMetadataTag.IMaxLength
    // NUMBER
    | IMetadataTag.IType
    | IMetadataTag.IMinimum
    | IMetadataTag.IMaximum
    | IMetadataTag.IExclusiveMinimum
    | IMetadataTag.IExclusiveMaximum
    | IMetadataTag.IMultipleOf
    | IMetadataTag.IStep;

export namespace IMetadataTag {
    /* -----------------------------------------------------------
        ARRAY   
    ----------------------------------------------------------- */
    export interface IItems {
        kind: "items";
        value: number;
    }

    export interface IMinItems {
        kind: "minItems";
        value: number;
    }

    export interface IMaxItems {
        kind: "maxItems";
        value: number;
    }

    /* -----------------------------------------------------------
        STRING
    ----------------------------------------------------------- */
    export interface IFormat {
        kind: "format";
        value: "uuid" | "email" | "url" | "ipv4" | "ipv6";
    }

    export interface IPattern {
        kind: "pattern";
        value: string;
    }

    export interface ILength {
        kind: "length";
        value: number;
    }

    export interface IMinLength {
        kind: "minLength";
        value: number;
    }

    export interface IMaxLength {
        kind: "maxLength";
        value: number;
    }

    /* -----------------------------------------------------------
        NUMBER
    ----------------------------------------------------------- */
    export interface IType {
        kind: "type";
        value: "int" | "uint";
    }

    export interface IMinimum {
        kind: "minimum";
        value: number;
    }

    export interface IMaximum {
        kind: "maximum";
        value: number;
    }

    export interface IExclusiveMinimum {
        kind: "exclusiveMinimum";
        value: number;
    }

    export interface IExclusiveMaximum {
        kind: "exclusiveMaximum";
        value: number;
    }

    export interface IMultipleOf {
        kind: "multipleOf";
        value: number;
    }

    export interface IStep {
        kind: "step";
        value: number;
    }

    /* -----------------------------------------------------------
        MISCELLANEOUS
    ----------------------------------------------------------- */
    export interface ISign {
        include: boolean;
        value: number;
    }
}
