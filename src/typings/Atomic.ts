export namespace Atomic {
  export type Type = boolean | number | string | bigint;

  export type Literal = "boolean" | "integer" | "number" | "string" | "bigint";

  export type Mapper = {
    boolean: boolean;
    integer: number;
    number: number;
    string: string;
    bigint: bigint;
  };
}
