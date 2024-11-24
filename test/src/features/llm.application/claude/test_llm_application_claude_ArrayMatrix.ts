import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_application_claude_ArrayMatrix = _test_llm_application({
  model: "claude",
  name: "ArrayMatrix",
})(typia.llm.application<ArrayMatrixApplication, "claude">());

interface ArrayMatrixApplication {
  insert(first: ArrayMatrix): Promise<void>;
  reduce(first: ArrayMatrix, second: ArrayMatrix | null): Promise<ArrayMatrix>;
  coalesce(
    first: ArrayMatrix | null,
    second: ArrayMatrix | null,
    third?: ArrayMatrix | null,
  ): Promise<ArrayMatrix | null>;
}
