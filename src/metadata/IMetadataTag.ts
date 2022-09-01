export type IMetadataTag =
    | IMetadataTag.IFormat
    | IMetadataTag.IPattern
    | IMetadataTag.ILength
    | IMetadataTag.IType
    | IMetadataTag.IRange
    | IMetadataTag.IMinimum
    | IMetadataTag.IMaximum;
export namespace IMetadataTag {
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
        minimum?: ISign;
        maximum?: ISign;
    }

    /* -----------------------------------------------------------
        NUMERIC
    ----------------------------------------------------------- */
    export interface IType {
        kind: "type";
        value: "int" | "uint";
    }

    export interface IRange {
        kind: "range";
        minimum?: ISign;
        maximum?: ISign;
    }

    export interface IMinimum {
        kind: "minimum";
        value: number;
    }

    export interface IMaximum {
        kind: "maximum";
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
