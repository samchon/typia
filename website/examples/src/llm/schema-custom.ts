import { IChatGptSchema } from "@samchon/openapi";
import typia, { tags } from "typia";

export const schema: IChatGptSchema = typia.llm.schema<IAccount, "chatgpt">({
  $defs: {},
});

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
  code: string & Placeholder<"Write you account code please">;
  balance: number & Monetary<"dollar">;
}
