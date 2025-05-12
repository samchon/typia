import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_llm_parameters_gemini_TypeTagMatrix = _test_llm_parameters({
  model: "gemini",
  name: "TypeTagMatrix",
})(typia.llm.parameters<TypeTagMatrixParameters, "gemini">());

interface TypeTagMatrixParameters {
  regular: TypeTagMatrix;
  nullable: TypeTagMatrix | null;
  optional: TypeTagMatrix | undefined;
  faint: TypeTagMatrix | null | undefined;
  array: Array<TypeTagMatrix>;
}
