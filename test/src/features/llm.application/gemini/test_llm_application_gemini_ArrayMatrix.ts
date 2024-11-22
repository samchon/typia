import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_application_gemini_ArrayMatrix = _test_llm_application({
  model: "gemini",
  name: "ArrayMatrix",
})(typia.llm.application<ArrayMatrixApplication, "gemini">());

interface ArrayMatrixApplication {
  insert(first: ArrayMatrix): Promise<void>;
  reduce(first: ArrayMatrix, second: ArrayMatrix | null): Promise<ArrayMatrix>;
  coalesce(
    first: ArrayMatrix | null,
    second: ArrayMatrix | null,
    third?: ArrayMatrix | null,
  ): Promise<ArrayMatrix | null>;
}
