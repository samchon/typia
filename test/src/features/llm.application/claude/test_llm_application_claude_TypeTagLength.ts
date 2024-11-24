import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_llm_application_claude_TypeTagLength = _test_llm_application({
  model: "claude",
  name: "TypeTagLength",
})(typia.llm.application<TypeTagLengthApplication, "claude">());

interface TypeTagLengthApplication {
  insert(first: TypeTagLength): Promise<void>;
  reduce(
    first: TypeTagLength,
    second: TypeTagLength | null,
  ): Promise<TypeTagLength>;
  coalesce(
    first: TypeTagLength | null,
    second: TypeTagLength | null,
    third?: TypeTagLength | null,
  ): Promise<TypeTagLength | null>;
}
