import typia from "typia";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_ArrayRepeatedRequired = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ArrayRepeatedRequired",
    factory: ArrayRepeatedRequired
  })(
    typia.llm.application<ArrayRepeatedRequiredApplication, "gemini", { equals: true }>(),
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