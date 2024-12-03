import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_llm_parameters_3_0_TypeTagMatrix = _test_llm_parameters({
  model: "3.0",
  name: "TypeTagMatrix",
})(typia.llm.parameters<TypeTagMatrixParameters, "3.0">());

interface TypeTagMatrixParameters {
  regular: TypeTagMatrix;
  nullable: TypeTagMatrix | null;
  optional: TypeTagMatrix | undefined;
  faint: TypeTagMatrix | null | undefined;
  array: Array<TypeTagMatrix>;
}
