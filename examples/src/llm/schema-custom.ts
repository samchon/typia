import { ILlmSchema } from "@samchon/openapi";
import typia, { tags } from "typia";

export const $defs: Record<string, ILlmSchema> = {};
export const schema: ILlmSchema = typia.llm.schema<IAccount>($defs);

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
