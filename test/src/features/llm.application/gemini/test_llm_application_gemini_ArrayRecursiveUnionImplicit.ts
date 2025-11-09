import typia from "typia";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_ArrayRecursiveUnionImplicit = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "ArrayRecursiveUnionImplicit",
    factory: ArrayRecursiveUnionImplicit
  })(
    typia.llm.application<ArrayRecursiveUnionImplicitApplication, "gemini">(),
  );

interface ArrayRecursiveUnionImplicitApplication {
  insert(p: { first: ArrayRecursiveUnionImplicit }): Promise<void>;
  reduce(p: { first: ArrayRecursiveUnionImplicit, second: ArrayRecursiveUnionImplicit | null }): Promise<ArrayRecursiveUnionImplicit>;
  coalesce(p: {
    first: ArrayRecursiveUnionImplicit | null,
    second: ArrayRecursiveUnionImplicit | null,
    third?: ArrayRecursiveUnionImplicit | null,
  }): Promise<ArrayRecursiveUnionImplicit | null>;
}