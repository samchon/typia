import typia from "typia";
import { TypeTagArray } from "../../../structures/TypeTagArray";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_1_TypeTagArray = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "TypeTagArray",
    factory: TypeTagArray
  })(
    typia.llm.application<TypeTagArrayApplication, "3.1", { equals: true }>(),
  );

interface TypeTagArrayApplication {
  insert(p: { first: TypeTagArray }): Promise<void>;
  reduce(p: { first: TypeTagArray, second: TypeTagArray | null }): Promise<TypeTagArray>;
  coalesce(p: {
    first: TypeTagArray | null,
    second: TypeTagArray | null,
    third?: TypeTagArray | null,
  }): Promise<TypeTagArray | null>;
}