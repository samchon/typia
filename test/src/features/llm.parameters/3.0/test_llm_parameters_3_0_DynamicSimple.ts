import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_llm_parameters_3_0_DynamicSimple = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "DynamicSimple",
  })(typia.llm.parameters<DynamicSimpleParameters, "3.0">());

interface DynamicSimpleParameters {
  regular: DynamicSimple;
  nullable: DynamicSimple | null;
  optional: DynamicSimple | undefined;
  faint: DynamicSimple | null | undefined;
  array: Array<DynamicSimple>;
}
