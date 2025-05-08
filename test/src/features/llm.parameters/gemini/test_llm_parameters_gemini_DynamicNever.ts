import typia from "typia";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_DynamicNever = 
  _test_llm_parameters({
    model: "gemini",
    name: "DynamicNever",
  })(
    typia.llm.parameters<DynamicNeverParameters, "gemini">(),
  );

interface DynamicNeverParameters {
  regular: DynamicNever;
  nullable: DynamicNever | null;
  optional: DynamicNever | undefined;
  faint: DynamicNever | null | undefined;
  array: Array<DynamicNever>;
}