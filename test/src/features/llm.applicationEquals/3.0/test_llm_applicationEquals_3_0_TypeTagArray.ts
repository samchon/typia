import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_llm_applicationEquals_3_0_TypeTagArray = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "TypeTagArray",
    factory: TypeTagArray,
  })(typia.llm.application<TypeTagArrayApplication, "3.0", { equals: true }>());

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
