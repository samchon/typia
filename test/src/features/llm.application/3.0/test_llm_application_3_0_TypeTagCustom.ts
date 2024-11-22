import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_llm_application_3_0_TypeTagCustom = _test_llm_application({
  model: "3.0",
  name: "TypeTagCustom",
})(typia.llm.application<TypeTagCustomApplication, "3.0">());

interface TypeTagCustomApplication {
  insert(first: TypeTagCustom): Promise<void>;
  reduce(
    first: TypeTagCustom,
    second: TypeTagCustom | null,
  ): Promise<TypeTagCustom>;
  coalesce(
    first: TypeTagCustom | null,
    second: TypeTagCustom | null,
    third?: TypeTagCustom | null,
  ): Promise<TypeTagCustom | null>;
}
