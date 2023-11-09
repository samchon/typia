import type ts from "typescript";

export interface IMetadataTypeTag {
    target: "boolean" | "bigint" | "number" | "string" | "array";
    name: string;
    kind: string;
    value: any;
    validate: string | undefined;
    exclusive: boolean | string[];

    /**
     * @internal
     */
    predicate?: (input: ts.Expression) => ts.Expression;
}
