import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_llm_parameters_llama_ArrayAny = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "ArrayAny",
  })(typia.llm.parameters<ArrayAnyParameters, "llama">());

interface ArrayAnyParameters {
  regular: ArrayAny;
  nullable: ArrayAny | null;
  optional: ArrayAny | undefined;
  faint: ArrayAny | null | undefined;
  array: Array<ArrayAny>;
}
