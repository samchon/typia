import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_applicationOfValidate_llama_ArrayMatrix =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "ArrayMatrix",
    factory: ArrayMatrix,
  })(typia.llm.applicationOfValidate<ArrayMatrixApplication, "llama">());

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
