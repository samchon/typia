import typia from "typia";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_ArrayRecursiveUnionImplicit = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "ArrayRecursiveUnionImplicit",
    factory: ArrayRecursiveUnionImplicit
  })(
    typia.llm.application<ArrayRecursiveUnionImplicitApplication, "3.1">(),
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