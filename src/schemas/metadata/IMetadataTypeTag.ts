import type ts from "typescript";

export interface IMetadataTypeTag {
    target: "boolean" | "bigint" | "number" | "string" | "array";
    name: string;
    kind: string;
    exclusive: boolean | string[];
    value?: any;
    validate?: string | undefined;

    /**
     * @internal
     */
    predicate?: (input: ts.Expression) => ts.Expression;
}
