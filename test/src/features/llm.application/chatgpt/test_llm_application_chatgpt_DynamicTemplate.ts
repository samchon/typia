import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_llm_application_chatgpt_DynamicTemplate =
  _test_llm_application({
    model: "chatgpt",
    name: "DynamicTemplate",
  })(typia.llm.application<DynamicTemplateApplication, "chatgpt">());

interface DynamicTemplateApplication {
  insert(first: DynamicTemplate): Promise<void>;
  reduce(
    first: DynamicTemplate,
    second: DynamicTemplate | null,
  ): Promise<DynamicTemplate>;
  coalesce(
    first: DynamicTemplate | null,
    second: DynamicTemplate | null,
    third?: DynamicTemplate | null,
  ): Promise<DynamicTemplate | null>;
}
