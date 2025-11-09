import typia from "typia";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_DynamicTree = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "DynamicTree",
  })(
    typia.llm.parameters<DynamicTreeParameters, "gemini">(),
  );

interface DynamicTreeParameters {
  regular: DynamicTree;
  nullable: DynamicTree | null;
  optional: DynamicTree | undefined;
  faint: DynamicTree | null | undefined;
  array: Array<DynamicTree>;
}