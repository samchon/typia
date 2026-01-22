import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_llm_application_ArrayRecursiveUnionImplicit = (): void =>
  _test_llm_application({
    name: "ArrayRecursiveUnionImplicit",
    factory: ArrayRecursiveUnionImplicit,
  })(typia.llm.application<ArrayRecursiveUnionImplicitApplication>());

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
