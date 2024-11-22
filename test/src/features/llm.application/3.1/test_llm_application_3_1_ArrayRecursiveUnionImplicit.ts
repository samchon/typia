import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_llm_application_3_1_ArrayRecursiveUnionImplicit =
  _test_llm_application({
    model: "3.1",
    name: "ArrayRecursiveUnionImplicit",
  })(typia.llm.application<ArrayRecursiveUnionImplicitApplication, "3.1">());

interface ArrayRecursiveUnionImplicitApplication {
  insert(first: ArrayRecursiveUnionImplicit): Promise<void>;
  reduce(
    first: ArrayRecursiveUnionImplicit,
    second: ArrayRecursiveUnionImplicit | null,
  ): Promise<ArrayRecursiveUnionImplicit>;
  coalesce(
    first: ArrayRecursiveUnionImplicit | null,
    second: ArrayRecursiveUnionImplicit | null,
    third?: ArrayRecursiveUnionImplicit | null,
  ): Promise<ArrayRecursiveUnionImplicit | null>;
}
