import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_llm_applicationEquals_claude_TemplateUnion = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "TemplateUnion",
    factory: TemplateUnion,
  })(
    typia.llm.application<
      TemplateUnionApplication,
      "claude",
      { equals: true }
    >(),
  );

interface TemplateUnionApplication {
  insert(p: { first: TemplateUnion }): Promise<void>;
  reduce(p: {
    first: TemplateUnion;
    second: TemplateUnion | null;
  }): Promise<TemplateUnion>;
  coalesce(p: {
    first: TemplateUnion | null;
    second: TemplateUnion | null;
    third?: TemplateUnion | null;
  }): Promise<TemplateUnion | null>;
}
