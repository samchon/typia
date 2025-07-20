import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_applicationEquals_chatgpt_TypeTagPattern = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "TypeTagPattern",
    factory: TypeTagPattern,
  })(
    typia.llm.application<
      TypeTagPatternApplication,
      "chatgpt",
      { equals:; true }
    >(),
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
