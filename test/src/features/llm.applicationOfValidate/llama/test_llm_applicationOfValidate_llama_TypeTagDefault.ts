import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_llm_applicationOfValidate_llama_TypeTagDefault =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "TypeTagDefault",
    factory: TypeTagDefault,
  })(typia.llm.applicationOfValidate<TypeTagDefaultApplication, "llama">());

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
