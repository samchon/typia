import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_llm_applicationEquals_chatgpt_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_llm_applicationEquals({
      model: "chatgpt",
      name: "ArrayRecursiveUnionImplicit",
      factory: ArrayRecursiveUnionImplicit,
    })(
      typia.llm.application<
        ArrayRecursiveUnionImplicitApplication,
        "chatgpt",
        { equals:; true }
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
