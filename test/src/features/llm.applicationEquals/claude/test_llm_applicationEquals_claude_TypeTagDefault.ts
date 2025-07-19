import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_llm_application_claude_TypeTagDefault =
  _test_llm_applicationEquals({
    model: "claude",
    name: "TypeTagDefault",
    factory: TypeTagDefault,
  })(
    typia.llm.application<
      TypeTagDefaultApplication,
      "claude",
      { equal: true }
    >(),
  );

interface TypeTagDefaultApplication {
  insert(p: { first: TypeTagDefault }): Promise<void>;
  reduce(p: {
    first: TypeTagDefault;
    second: TypeTagDefault | null;
  }): Promise<TypeTagDefault>;
  coalesce(p: {
    first: TypeTagDefault | null;
    second: TypeTagDefault | null;
    third?: TypeTagDefault | null;
  }): Promise<TypeTagDefault | null>;
}
