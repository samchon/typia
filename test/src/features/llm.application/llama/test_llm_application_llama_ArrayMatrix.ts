import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_application_llama_ArrayMatrix = (): void =>
  _test_llm_application({
    model: "llama",
    name: "ArrayMatrix",
    factory: ArrayMatrix,
  })(typia.llm.application<ArrayMatrixApplication, "llama">());

interface ArrayMatrixApplication {
  insert(p: { first: ArrayMatrix }): Promise<void>;
  reduce(p: {
    first: ArrayMatrix;
    second: ArrayMatrix | null;
  }): Promise<ArrayMatrix>;
  coalesce(p: {
    first: ArrayMatrix | null;
    second: ArrayMatrix | null;
    third?: ArrayMatrix | null;
  }): Promise<ArrayMatrix | null>;
}
