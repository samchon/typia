import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_llm_applicationEquals_llama_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_llm_applicationEquals({
      model: "llama",
      name: "ArrayRecursiveUnionExplicit",
      factory: ArrayRecursiveUnionExplicit,
    })(
      typia.llm.application<
        ArrayRecursiveUnionExplicitApplication,
        "llama",
        { equals: true }
      >(),
    );

interface ArrayRecursiveUnionExplicitApplication {
  insert(p: { first: ArrayRecursiveUnionExplicit }): Promise<void>;
  reduce(p: {
    first: ArrayRecursiveUnionExplicit;
    second: ArrayRecursiveUnionExplicit | null;
  }): Promise<ArrayRecursiveUnionExplicit>;
  coalesce(p: {
    first: ArrayRecursiveUnionExplicit | null;
    second: ArrayRecursiveUnionExplicit | null;
    third?: ArrayRecursiveUnionExplicit | null;
  }): Promise<ArrayRecursiveUnionExplicit | null>;
}
