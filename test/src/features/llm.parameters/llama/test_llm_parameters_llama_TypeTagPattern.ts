import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_parameters_llama_TypeTagPattern = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "TypeTagPattern",
  })(typia.llm.parameters<TypeTagPatternParameters, "llama">());

interface TypeTagPatternParameters {
  regular: TypeTagPattern;
  nullable: TypeTagPattern | null;
  optional: TypeTagPattern | undefined;
  faint: TypeTagPattern | null | undefined;
  array: Array<TypeTagPattern>;
}
