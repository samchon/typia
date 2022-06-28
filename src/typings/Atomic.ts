export namespace Atomic {
    export type Type = boolean | number | string | bigint;
    export type Literal = "boolean" | "number" | "string" | "bigint";

    export type Mapper = {
        boolean: boolean;
        number: number;
        string: string;
        bigint: bigint;
    };
}
