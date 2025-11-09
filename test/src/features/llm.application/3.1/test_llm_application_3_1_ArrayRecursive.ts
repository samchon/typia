import typia from "typia";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_ArrayRecursive = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "ArrayRecursive",
    factory: ArrayRecursive
  })(
    typia.llm.application<ArrayRecursiveApplication, "3.1">(),
  );

interface ArrayRecursiveApplication {
  insert(p: { first: ArrayRecursive }): Promise<void>;
  reduce(p: { first: ArrayRecursive, second: ArrayRecursive | null }): Promise<ArrayRecursive>;
  coalesce(p: {
    first: ArrayRecursive | null,
    second: ArrayRecursive | null,
    third?: ArrayRecursive | null,
  }): Promise<ArrayRecursive | null>;
}