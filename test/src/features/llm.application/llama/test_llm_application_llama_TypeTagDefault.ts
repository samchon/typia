import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_llm_application_llama_TypeTagDefault = _test_llm_application({
  model: "llama",
  name: "TypeTagDefault",
})(typia.llm.application<TypeTagDefaultApplication, "llama">());

interface TypeTagDefaultApplication {
  insert(p: { first: TypeTagDefault }): Promise<void>;
  reduce(p: {
    first: TypeTagDefault;
    second: TypeTagDefault | null;
  }): Promise<TypeTagDefault>;
  coalesce(p: {
    first: TypeTagDefault | null;
    second: TypeTagDefault | null;
    third?: TypeTagDefault | null;
  }): Promise<TypeTagDefault | null>;
}
