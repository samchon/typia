import { TagBase } from "./TagBase";

export type Default<Value extends boolean | bigint | number | string> =
  TagBase<{
    target: Value extends boolean
      ? "boolean"
      : Value extends bigint
        ? "bigint"
        : Value extends number
          ? "number"
          : "string";
    kind: "default";
    value: Value;
    exclusive: true;
    schema: Value extends bigint
      ? { default: Numeric<Value> }
      : { default: Value };
  }>;

type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;
