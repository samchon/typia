import typia from "typia";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_ArraySimple = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "ArraySimple",
    factory: ArraySimple
  })(
    typia.llm.application<ArraySimpleApplication, "3.0">(),
  );

interface ArraySimpleApplication {
  insert(p: { first: ArraySimple }): Promise<void>;
  reduce(p: { first: ArraySimple, second: ArraySimple | null }): Promise<ArraySimple>;
  coalesce(p: {
    first: ArraySimple | null,
    second: ArraySimple | null,
    third?: ArraySimple | null,
  }): Promise<ArraySimple | null>;
}