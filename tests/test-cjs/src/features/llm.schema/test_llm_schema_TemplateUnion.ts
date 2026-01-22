import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_llm_schema_TemplateUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TemplateUnion>($defs);
  _test_llm_schema({
    name: "TemplateUnion",
    schema,
    $defs,
  });
};
