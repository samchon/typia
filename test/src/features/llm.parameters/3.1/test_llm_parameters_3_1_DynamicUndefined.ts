import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_llm_parameters_3_1_DynamicUndefined = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "DynamicUndefined",
  })(typia.llm.parameters<DynamicUndefinedParameters, "3.1">());

interface DynamicUndefinedParameters {
  regular: DynamicUndefined;
  nullable: DynamicUndefined | null;
  optional: DynamicUndefined | undefined;
  faint: DynamicUndefined | null | undefined;
  array: Array<DynamicUndefined>;
}
