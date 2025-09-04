import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_llm_application_3_1_DynamicTemplate = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "DynamicTemplate",
    factory: DynamicTemplate,
  })(typia.llm.application<DynamicTemplateApplication, "3.1">());

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
