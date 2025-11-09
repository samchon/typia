import typia from "typia";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_DynamicArray = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "DynamicArray",
  })(
    typia.llm.parameters<DynamicArrayParameters, "claude">(),
  );

interface DynamicArrayParameters {
  regular: DynamicArray;
  nullable: DynamicArray | null;
  optional: DynamicArray | undefined;
  faint: DynamicArray | null | undefined;
  array: Array<DynamicArray>;
}