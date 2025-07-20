import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_applicationEquals_3_1_TypeTagPattern = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "TypeTagPattern",
    factory: TypeTagPattern,
  })(
    typia.llm.application<TypeTagPatternApplication, "3.1", { equals: true }>(),
  );

interface TypeTagPatternApplication {
  insert(p: { first: TypeTagPattern }): Promise<void>;
  reduce(p: {
    first: TypeTagPattern;
    second: TypeTagPattern | null;
  }): Promise<TypeTagPattern>;
  coalesce(p: {
    first: TypeTagPattern | null;
    second: TypeTagPattern | null;
    third?: TypeTagPattern | null;
  }): Promise<TypeTagPattern | null>;
}
