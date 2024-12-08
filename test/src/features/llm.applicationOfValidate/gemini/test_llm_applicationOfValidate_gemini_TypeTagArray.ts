import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_llm_applicationOfValidate_gemini_TypeTagArray =
  _test_llm_applicationOfValidate({
    model: "gemini",
    name: "TypeTagArray",
    factory: TypeTagArray,
  })(typia.llm.applicationOfValidate<TypeTagArrayApplication, "gemini">());

interface TypeTagArrayApplication {
  insert(p: { first: TypeTagArray }): Promise<void>;
  reduce(p: {
    first: TypeTagArray;
    second: TypeTagArray | null;
  }): Promise<TypeTagArray>;
  coalesce(p: {
    first: TypeTagArray | null;
    second: TypeTagArray | null;
    third?: TypeTagArray | null;
  }): Promise<TypeTagArray | null>;
}
