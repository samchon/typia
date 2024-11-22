import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_llm_application_3_0_TypeTagLength = _test_llm_application({
  model: "3.0",
  name: "TypeTagLength",
})(typia.llm.application<TypeTagLengthApplication, "3.0">());

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
