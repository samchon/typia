import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_llm_applicationEquals_llama_TypeTagRange = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "TypeTagRange",
    factory: TypeTagRange,
  })(
    typia.llm.application<TypeTagRangeApplication, "llama", { equals: true }>(),
  );

interface TypeTagRangeApplication {
  insert(p: { first: TypeTagRange }): Promise<void>;
  reduce(p: {
    first: TypeTagRange;
    second: TypeTagRange | null;
  }): Promise<TypeTagRange>;
  coalesce(p: {
    first: TypeTagRange | null;
    second: TypeTagRange | null;
    third?: TypeTagRange | null;
  }): Promise<TypeTagRange | null>;
}
