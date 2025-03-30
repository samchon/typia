import typia, { tags } from "typia";

export const SpecialTypeTagSchema = typia.json.schemas<[IAccount]>();

type Monetary<Value extends string> = tags.TagBase<{
  target: "number";
  kind: "monetary";
  value: Value;
  schema: {
    "x-monetary": Value;
  };
}>;

type Placeholder<Value extends string> = tags.JsonSchemaPlugin<{
  "x-placeholder": Value;
}>;

interface IAccount {
  code: string & Placeholder<"Write your account code please">;
  balance: number & Monetary<"dollar">;
}
