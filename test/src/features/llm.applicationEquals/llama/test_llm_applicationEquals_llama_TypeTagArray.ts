import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_llm_applicationEquals_llama_TypeTagArray = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "TypeTagArray",
    factory: TypeTagArray,
  })(
    typia.llm.application<TypeTagArrayApplication, "llama", { equal: true }>(),
  );

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
