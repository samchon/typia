import typia from "typia";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_DynamicConstant = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "DynamicConstant",
  })(
    typia.llm.parameters<DynamicConstantParameters, "gemini">(),
  );

interface DynamicConstantParameters {
  regular: DynamicConstant;
  nullable: DynamicConstant | null;
  optional: DynamicConstant | undefined;
  faint: DynamicConstant | null | undefined;
  array: Array<DynamicConstant>;
}