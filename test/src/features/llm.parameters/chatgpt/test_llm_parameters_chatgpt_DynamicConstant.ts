import typia from "typia";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_DynamicConstant = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "DynamicConstant",
  })(
    typia.llm.parameters<DynamicConstantParameters, "chatgpt">(),
  );

interface DynamicConstantParameters {
  regular: DynamicConstant;
  nullable: DynamicConstant | null;
  optional: DynamicConstant | undefined;
  faint: DynamicConstant | null | undefined;
  array: Array<DynamicConstant>;
}