import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_llm_parameters_gemini_TypeTagArray = _test_llm_parameters({
  model: "gemini",
  name: "TypeTagArray",
})(typia.llm.parameters<TypeTagArrayParameters, "gemini">());

interface TypeTagArrayParameters {
  regular: TypeTagArray;
  nullable: TypeTagArray | null;
  optional: TypeTagArray | undefined;
  faint: TypeTagArray | null | undefined;
  array: Array<TypeTagArray>;
}
