import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_llm_application_3_0_TypeTagDefault = _test_llm_application({
  model: "3.0",
  name: "TypeTagDefault",
})(typia.llm.application<TypeTagDefaultApplication, "3.0">());

interface TypeTagDefaultApplication {
  insert(first: TypeTagDefault): Promise<void>;
  reduce(
    first: TypeTagDefault,
    second: TypeTagDefault | null,
  ): Promise<TypeTagDefault>;
  coalesce(
    first: TypeTagDefault | null,
    second: TypeTagDefault | null,
    third?: TypeTagDefault | null,
  ): Promise<TypeTagDefault | null>;
}
