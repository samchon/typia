import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_llm_schema_TemplateConstant = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TemplateConstant>($defs);
  _test_llm_schema({
    name: "TemplateConstant",
    schema,
    $defs,
  });
};
