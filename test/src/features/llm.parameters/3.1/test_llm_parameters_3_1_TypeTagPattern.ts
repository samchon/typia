import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_parameters_3_1_TypeTagPattern = _test_llm_parameters({
  model: "3.1",
  name: "TypeTagPattern",
})(typia.llm.parameters<TypeTagPatternParameters, "3.1">());

interface TypeTagPatternParameters {
  regular: TypeTagPattern;
  nullable: TypeTagPattern | null;
  optional: TypeTagPattern | undefined;
  faint: TypeTagPattern | null | undefined;
  array: Array<TypeTagPattern>;
}
