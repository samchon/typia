export type IMetadataTag =
    | IMetadataTag.IFormat
    | IMetadataTag.IPattern
    | IMetadataTag.IRange
    | IMetadataTag.ILength;
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

    export interface IType {
        kind: "type";
        value: "short" | "ushort" | "int" | "uint" | "bigint" | "ubigint";
    }
    export interface IRange {
        kind: "range";
        minimum?: ISign;
        maximum?: ISign;
    }

    export interface ISign {
        include: boolean;
        value: number;
    }
}
