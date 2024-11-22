import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_llm_application_3_1_TypeTagRange = _test_llm_application({
  model: "3.1",
  name: "TypeTagRange",
})(typia.llm.application<TypeTagRangeApplication, "3.1">());

interface TypeTagRangeApplication {
  insert(first: TypeTagRange): Promise<void>;
  reduce(
    first: TypeTagRange,
    second: TypeTagRange | null,
  ): Promise<TypeTagRange>;
  coalesce(
    first: TypeTagRange | null,
    second: TypeTagRange | null,
    third?: TypeTagRange | null,
  ): Promise<TypeTagRange | null>;
}
