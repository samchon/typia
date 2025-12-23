import typia from "typia";

import { _test_llm_applicationEquals } from "../../internal/_test_llm_applicationEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_llm_applicationEquals_DynamicTemplate = (): void =>
  _test_llm_applicationEquals({
    name: "DynamicTemplate",
    factory: DynamicTemplate,
  })(typia.llm.application<DynamicTemplateApplication, { equals: true }>());

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
