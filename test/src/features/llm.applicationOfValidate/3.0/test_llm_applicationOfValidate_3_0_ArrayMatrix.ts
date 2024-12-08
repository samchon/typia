import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_applicationOfValidate_3_0_ArrayMatrix =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "ArrayMatrix",
    factory: ArrayMatrix,
  })(typia.llm.applicationOfValidate<ArrayMatrixApplication, "3.0">());

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
