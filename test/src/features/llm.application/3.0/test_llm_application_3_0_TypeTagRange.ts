import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_llm_application_3_0_TypeTagRange = _test_llm_application({
  model: "3.0",
  name: "TypeTagRange",
})(typia.llm.application<TypeTagRangeApplication, "3.0">());

interface TypeTagRangeApplication {
  insert(p: { first: TypeTagRange }): Promise<void>;
  reduce(p: {
    first: TypeTagRange;
    second: TypeTagRange | null;
  }): Promise<TypeTagRange>;
  coalesce(p: {
    first: TypeTagRange | null;
    second: TypeTagRange | null;
    third?: TypeTagRange | null;
  }): Promise<TypeTagRange | null>;
}
