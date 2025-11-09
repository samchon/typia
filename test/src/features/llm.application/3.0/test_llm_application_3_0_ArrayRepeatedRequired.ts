import typia from "typia";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_ArrayRepeatedRequired = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "ArrayRepeatedRequired",
    factory: ArrayRepeatedRequired
  })(
    typia.llm.application<ArrayRepeatedRequiredApplication, "3.0">(),
  );

interface ArrayRepeatedRequiredApplication {
  insert(p: { first: ArrayRepeatedRequired }): Promise<void>;
  reduce(p: { first: ArrayRepeatedRequired, second: ArrayRepeatedRequired | null }): Promise<ArrayRepeatedRequired>;
  coalesce(p: {
    first: ArrayRepeatedRequired | null,
    second: ArrayRepeatedRequired | null,
    third?: ArrayRepeatedRequired | null,
  }): Promise<ArrayRepeatedRequired | null>;
}