import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_llm_application_3_0_TypeTagArray = _test_llm_application({
  model: "3.0",
  name: "TypeTagArray",
  factory: TypeTagArray,
})(typia.llm.application<TypeTagArrayApplication, "3.0">());

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
