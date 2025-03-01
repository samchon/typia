import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_application_3_0_TypeTagPattern = _test_llm_application({
  model: "3.0",
  name: "TypeTagPattern",
  factory: TypeTagPattern,
})(typia.llm.application<TypeTagPatternApplication, "3.0">());

interface TypeTagPatternApplication {
  insert(p: { first: TypeTagPattern }): Promise<void>;
  reduce(p: {
    first: TypeTagPattern;
    second: TypeTagPattern | null;
  }): Promise<TypeTagPattern>;
  coalesce(p: {
    first: TypeTagPattern | null;
    second: TypeTagPattern | null;
    third?: TypeTagPattern | null;
  }): Promise<TypeTagPattern | null>;
}
