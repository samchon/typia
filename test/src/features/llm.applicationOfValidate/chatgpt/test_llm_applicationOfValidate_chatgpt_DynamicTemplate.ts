import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_llm_applicationOfValidate_chatgpt_DynamicTemplate =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "DynamicTemplate",
    factory: DynamicTemplate,
  })(typia.llm.applicationOfValidate<DynamicTemplateApplication, "chatgpt">());

interface DynamicTemplateApplication {
  insert(p: { first: DynamicTemplate }): Promise<void>;
  reduce(p: {
    first: DynamicTemplate;
    second: DynamicTemplate | null;
  }): Promise<DynamicTemplate>;
  coalesce(p: {
    first: DynamicTemplate | null;
    second: DynamicTemplate | null;
    third?: DynamicTemplate | null;
  }): Promise<DynamicTemplate | null>;
}
