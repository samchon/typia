import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_applicationOfValidate_llama_TypeTagPattern =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "TypeTagPattern",
    factory: TypeTagPattern,
  })(typia.llm.applicationOfValidate<TypeTagPatternApplication, "llama">());

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
