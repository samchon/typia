import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_llm_applicationEquals_3_0_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_llm_applicationEquals({
      model: "3.0",
      name: "ArrayRecursiveUnionImplicit",
      factory: ArrayRecursiveUnionImplicit,
    })(
      typia.llm.application<
        ArrayRecursiveUnionImplicitApplication,
        "3.0",
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
