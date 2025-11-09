import typia from "typia";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_1_DynamicTemplate = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "DynamicTemplate",
    factory: DynamicTemplate
  })(
    typia.llm.application<DynamicTemplateApplication, "3.1", { equals: true }>(),
  );

interface DynamicTemplateApplication {
  insert(p: { first: DynamicTemplate }): Promise<void>;
  reduce(p: { first: DynamicTemplate, second: DynamicTemplate | null }): Promise<DynamicTemplate>;
  coalesce(p: {
    first: DynamicTemplate | null,
    second: DynamicTemplate | null,
    third?: DynamicTemplate | null,
  }): Promise<DynamicTemplate | null>;
}