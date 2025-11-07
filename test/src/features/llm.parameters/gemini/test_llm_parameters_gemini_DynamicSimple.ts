import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_llm_parameters_gemini_DynamicSimple = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "DynamicSimple",
  })(typia.llm.parameters<DynamicSimpleParameters, "gemini">());

interface DynamicSimpleParameters {
  regular: DynamicSimple;
  nullable: DynamicSimple | null;
  optional: DynamicSimple | undefined;
  faint: DynamicSimple | null | undefined;
  array: Array<DynamicSimple>;
}
