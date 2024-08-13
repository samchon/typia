import { TagBase } from "./TagBase";

export type Minimum<Value extends number | bigint> = TagBase<{
  target: Value extends bigint ? "bigint" : "number";
  kind: "minimum";
  value: Value;
  validate: `${Cast<Value>} <= $input`;
  exclusive: ["minimum", "exclusiveMinimum"];
  schema: Value extends bigint
    ? { minimum: Numeric<Value> }
    : { minimum: Value };
}>;

type Cast<Value extends number | bigint> = Value extends number
  ? Value
  : `BigInt(${Value})`;
type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;
