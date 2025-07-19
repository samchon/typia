import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_application_chatgpt_ArrayMatrix =
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ArrayMatrix",
    factory: ArrayMatrix,
  })(
    typia.llm.application<ArrayMatrixApplication, "chatgpt", { equal: true }>(),
  );

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
