import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_llm_application_llama_ArrayRecursiveUnionExplicit =
  _test_llm_application({
    model: "llama",
    name: "ArrayRecursiveUnionExplicit",
  })(typia.llm.application<ArrayRecursiveUnionExplicitApplication, "llama">());

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
