import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_llm_application_llama_TypeTagLength = _test_llm_application({
  model: "llama",
  name: "TypeTagLength",
})(typia.llm.application<TypeTagLengthApplication, "llama">());

interface TypeTagLengthApplication {
  insert(first: TypeTagLength): Promise<void>;
  reduce(
    first: TypeTagLength,
    second: TypeTagLength | null,
  ): Promise<TypeTagLength>;
  coalesce(
    first: TypeTagLength | null,
    second: TypeTagLength | null,
    third?: TypeTagLength | null,
  ): Promise<TypeTagLength | null>;
}
