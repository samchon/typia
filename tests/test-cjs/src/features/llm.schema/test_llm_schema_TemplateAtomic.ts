import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_llm_schema_TemplateAtomic = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TemplateAtomic>($defs);
  _test_llm_schema({
    name: "TemplateAtomic",
    schema,
    $defs,
  });
};
