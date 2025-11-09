import typia from "typia";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_chatgpt_TemplateUnion = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "TemplateUnion",
    factory: TemplateUnion
  })(
    typia.llm.application<TemplateUnionApplication, "chatgpt", { equals: true }>(),
  );

interface TemplateUnionApplication {
  insert(p: { first: TemplateUnion }): Promise<void>;
  reduce(p: { first: TemplateUnion, second: TemplateUnion | null }): Promise<TemplateUnion>;
  coalesce(p: {
    first: TemplateUnion | null,
    second: TemplateUnion | null,
    third?: TemplateUnion | null,
  }): Promise<TemplateUnion | null>;
}