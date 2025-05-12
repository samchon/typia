import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_parameters_gemini_ArrayMatrix = _test_llm_parameters({
  model: "gemini",
  name: "ArrayMatrix",
})(typia.llm.parameters<ArrayMatrixParameters, "gemini">());

interface ArrayMatrixParameters {
  regular: ArrayMatrix;
  nullable: ArrayMatrix | null;
  optional: ArrayMatrix | undefined;
  faint: ArrayMatrix | null | undefined;
  array: Array<ArrayMatrix>;
}
