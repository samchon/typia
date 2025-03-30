import typia, { tags } from "typia";

export const assertSomething = typia.createAssert<Something>();

//----
// DEFINE CUSTOM TYPE TAGS
//----
type Dollar = tags.TagBase<{
  kind: "dollar";
  target: "string";
  value: undefined;
  validate: `$input[0] === "$" && !isNaN(Number($input.substring(1).split(",").join("")))`;
}>;

type Postfix<Value extends string> = tags.TagBase<{
  kind: "postfix";
  target: "string";
  value: Value;
  validate: `$input.endsWith("${Value}")`;
}>;

type IsEven<Value extends number | bigint> = tags.TagBase<{
  kind: "isEven";
  target: Value extends number ? "number" : "bigint";
  value: undefined;
  validate: `$input % ${Numeric<2>} === ${Numeric<0>}`;
}>;

type Numeric<Value extends number | bigint> = Value extends number
  ? Value
  : `BigInt(${Value})`;

//----
// VALIDATION
//----
interface Something {
  dollar: string & Dollar;
  postfix: string & Postfix<"!!!">;
  isEven: number & IsEven<number>;
}
