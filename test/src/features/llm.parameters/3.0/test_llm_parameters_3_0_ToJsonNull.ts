import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_llm_parameters_3_0_ToJsonNull = _test_llm_parameters({
  model: "3.0",
  name: "ToJsonNull",
})(typia.llm.parameters<ToJsonNullParameters, "3.0">());

interface ToJsonNullParameters {
  regular: ToJsonNull;
  nullable: ToJsonNull | null;
  optional: ToJsonNull | undefined;
  faint: ToJsonNull | null | undefined;
  array: Array<ToJsonNull>;
}
