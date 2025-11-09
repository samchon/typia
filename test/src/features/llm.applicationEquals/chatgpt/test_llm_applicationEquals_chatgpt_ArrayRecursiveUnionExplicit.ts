import typia from "typia";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_chatgpt_ArrayRecursiveUnionExplicit = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ArrayRecursiveUnionExplicit",
    factory: ArrayRecursiveUnionExplicit
  })(
    typia.llm.application<ArrayRecursiveUnionExplicitApplication, "chatgpt", { equals: true }>(),
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