import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_parameters_claude_TypeTagPattern = _test_llm_parameters({
  model: "claude",
  name: "TypeTagPattern",
})(typia.llm.parameters<TypeTagPatternParameters, "claude">());

interface TypeTagPatternParameters {
  regular: TypeTagPattern;
  nullable: TypeTagPattern | null;
  optional: TypeTagPattern | undefined;
  faint: TypeTagPattern | null | undefined;
  array: Array<TypeTagPattern>;
}
