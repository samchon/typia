import typia from "typia";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ArrayRecursiveUnionExplicit = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ArrayRecursiveUnionExplicit",
    factory: ArrayRecursiveUnionExplicit
  })(
    typia.llm.application<ArrayRecursiveUnionExplicitApplication, "chatgpt">(),
  );

interface ArrayRecursiveUnionExplicitApplication {
  insert(p: { first: ArrayRecursiveUnionExplicit }): Promise<void>;
  reduce(p: { first: ArrayRecursiveUnionExplicit, second: ArrayRecursiveUnionExplicit | null }): Promise<ArrayRecursiveUnionExplicit>;
  coalesce(p: {
    first: ArrayRecursiveUnionExplicit | null,
    second: ArrayRecursiveUnionExplicit | null,
    third?: ArrayRecursiveUnionExplicit | null,
  }): Promise<ArrayRecursiveUnionExplicit | null>;
}