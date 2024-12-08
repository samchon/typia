import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_llm_applicationOfValidate_gemini_TypeTagCustom =
  _test_llm_applicationOfValidate({
    model: "gemini",
    name: "TypeTagCustom",
    factory: TypeTagCustom,
  })(typia.llm.applicationOfValidate<TypeTagCustomApplication, "gemini">());

interface TypeTagCustomApplication {
  insert(p: { first: TypeTagCustom }): Promise<void>;
  reduce(p: {
    first: TypeTagCustom;
    second: TypeTagCustom | null;
  }): Promise<TypeTagCustom>;
  coalesce(p: {
    first: TypeTagCustom | null;
    second: TypeTagCustom | null;
    third?: TypeTagCustom | null;
  }): Promise<TypeTagCustom | null>;
}
