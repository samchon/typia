import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_llm_application_3_0_ArrayRecursiveUnionExplicit =
  _test_llm_application({
    model: "3.0",
    name: "ArrayRecursiveUnionExplicit",
  })(typia.llm.application<ArrayRecursiveUnionExplicitApplication, "3.0">());

interface ArrayRecursiveUnionExplicitApplication {
  insert(first: ArrayRecursiveUnionExplicit): Promise<void>;
  reduce(
    first: ArrayRecursiveUnionExplicit,
    second: ArrayRecursiveUnionExplicit | null,
  ): Promise<ArrayRecursiveUnionExplicit>;
  coalesce(
    first: ArrayRecursiveUnionExplicit | null,
    second: ArrayRecursiveUnionExplicit | null,
    third?: ArrayRecursiveUnionExplicit | null,
  ): Promise<ArrayRecursiveUnionExplicit | null>;
}
