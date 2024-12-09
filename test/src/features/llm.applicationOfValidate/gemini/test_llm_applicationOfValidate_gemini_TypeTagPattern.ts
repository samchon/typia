import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_applicationOfValidate_gemini_TypeTagPattern =
  _test_llm_applicationOfValidate({
    model: "gemini",
    name: "TypeTagPattern",
    factory: TypeTagPattern,
  })(typia.llm.applicationOfValidate<TypeTagPatternApplication, "gemini">());

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
