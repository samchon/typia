import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_applicationEquals_3_0_ArrayMatrix = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "ArrayMatrix",
    factory: ArrayMatrix,
  })(typia.llm.application<ArrayMatrixApplication, "3.0", { equals: true }>());

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
