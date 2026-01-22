import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_llm_application_TypeTagArray = (): void =>
  _test_llm_application({
    name: "TypeTagArray",
    factory: TypeTagArray,
  })(typia.llm.application<TypeTagArrayApplication>());

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
