import { TagBase } from "./TagBase";

export type MultipleOf<Value extends number | bigint> = TagBase<{
  target: Value extends bigint ? "bigint" : "number";
  kind: "multipleOf";
  value: Value;
  validate: `$input % ${Cast<Value>} === ${Value extends bigint
    ? Cast<0n>
    : 0}`;
  exclusive: true;
  schema: Value extends bigint
    ? { multipleOf: Numeric<Value> }
    : { multipleOf: Value };
}>;

type Cast<Value extends number | bigint> = Value extends number
  ? Value
  : `BigInt(${Value})`;
type Numeric<T extends bigint> = `${T}` extends `${infer N extends number}`
  ? N
  : never;
