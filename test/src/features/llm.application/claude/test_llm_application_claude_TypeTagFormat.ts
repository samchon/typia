import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_llm_application_claude_TypeTagFormat = _test_llm_application({
  model: "claude",
  name: "TypeTagFormat",
  factory: TypeTagFormat,
})(typia.llm.application<TypeTagFormatApplication, "claude">());

interface TypeTagFormatApplication {
  insert(p: { first: TypeTagFormat }): Promise<void>;
  reduce(p: {
    first: TypeTagFormat;
    second: TypeTagFormat | null;
  }): Promise<TypeTagFormat>;
  coalesce(p: {
    first: TypeTagFormat | null;
    second: TypeTagFormat | null;
    third?: TypeTagFormat | null;
  }): Promise<TypeTagFormat | null>;
}
