import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_llm_applicationEquals_gemini_TypeTagRange = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "TypeTagRange",
    factory: TypeTagRange,
  })(
    typia.llm.application<TypeTagRangeApplication, "gemini", { equals:; true }>(),
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
