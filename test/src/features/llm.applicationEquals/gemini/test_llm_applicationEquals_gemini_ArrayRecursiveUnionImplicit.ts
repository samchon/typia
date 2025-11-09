import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_llm_applicationEquals_gemini_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_llm_applicationEquals({
      model: "gemini",
      name: "ArrayRecursiveUnionImplicit",
      factory: ArrayRecursiveUnionImplicit,
    })(
      typia.llm.application<
        ArrayRecursiveUnionImplicitApplication,
        "gemini",
        { equals: true }
      >(),
    );

interface ArrayRecursiveUnionImplicitApplication {
  insert(p: { first: ArrayRecursiveUnionImplicit }): Promise<void>;
  reduce(p: {
    first: ArrayRecursiveUnionImplicit;
    second: ArrayRecursiveUnionImplicit | null;
  }): Promise<ArrayRecursiveUnionImplicit>;
  coalesce(p: {
    first: ArrayRecursiveUnionImplicit | null;
    second: ArrayRecursiveUnionImplicit | null;
    third?: ArrayRecursiveUnionImplicit | null;
  }): Promise<ArrayRecursiveUnionImplicit | null>;
}
