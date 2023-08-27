export interface IMetadataTypeTag {
    target: "bigint" | "number" | "string" | "array";
    name: string;
    kind: string;
    value: any;
    validate: string;
    exclusive: boolean | string[];
}
