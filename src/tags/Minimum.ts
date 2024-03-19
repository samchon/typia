import { TagBase } from "./TagBase";

export type Minimum<Value extends number | bigint> = TagBase<{
  target: Value extends number ? "number" : "bigint";
  kind: "minimum";
  value: Value;
  validate: `${Numeric<Value>} <= $input`;
  exclusive: ["minimum", "exclusiveMinimum"];
  schema: Value extends number
    ? {
        minimum: Value;
      }
    : undefined;
}>;

type Numeric<Value extends number | bigint> = Value extends number
  ? Value
  : `BigInt(${Value})`;
