import { TagBase } from "./TagBase";

export type ExclusiveMaximum<Value extends number | bigint> = TagBase<{
  target: Value extends number ? "number" : "bigint";
  kind: "exclusiveMaximum";
  value: Value;
  validate: `$input < ${Numeric<Value>}`;
  exclusive: ["exclusiveMaximum", "maximum"];
  schema: Value extends number
    ? {
        exclusiveMaximum: true;
        maximum: Value;
      }
    : undefined;
}>;

type Numeric<Value extends number | bigint> = Value extends number
  ? Value
  : `BigInt(${Value})`;
