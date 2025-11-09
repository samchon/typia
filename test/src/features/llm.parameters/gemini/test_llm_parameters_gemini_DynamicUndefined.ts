import typia from "typia";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_DynamicUndefined = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "DynamicUndefined",
  })(
    typia.llm.parameters<DynamicUndefinedParameters, "gemini">(),
  );

interface DynamicUndefinedParameters {
  regular: DynamicUndefined;
  nullable: DynamicUndefined | null;
  optional: DynamicUndefined | undefined;
  faint: DynamicUndefined | null | undefined;
  array: Array<DynamicUndefined>;
}