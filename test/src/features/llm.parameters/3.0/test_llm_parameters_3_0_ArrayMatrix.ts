import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_parameters_3_0_ArrayMatrix = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ArrayMatrix",
  })(typia.llm.parameters<ArrayMatrixParameters, "3.0">());

interface ArrayMatrixParameters {
  regular: ArrayMatrix;
  nullable: ArrayMatrix | null;
  optional: ArrayMatrix | undefined;
  faint: ArrayMatrix | null | undefined;
  array: Array<ArrayMatrix>;
}
