import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_application_3_0_ArrayMatrix = _test_llm_application({
  model: "3.0",
  name: "ArrayMatrix",
})(typia.llm.application<ArrayMatrixApplication, "3.0">());

interface ArrayMatrixApplication {
  insert(first: ArrayMatrix): Promise<void>;
  reduce(first: ArrayMatrix, second: ArrayMatrix | null): Promise<ArrayMatrix>;
  coalesce(
    first: ArrayMatrix | null,
    second: ArrayMatrix | null,
    third?: ArrayMatrix | null,
  ): Promise<ArrayMatrix | null>;
}
