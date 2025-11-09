import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_llm_parameters_3_1_ToJsonNull = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ToJsonNull",
  })(typia.llm.parameters<ToJsonNullParameters, "3.1">());

interface ToJsonNullParameters {
  regular: ToJsonNull;
  nullable: ToJsonNull | null;
  optional: ToJsonNull | undefined;
  faint: ToJsonNull | null | undefined;
  array: Array<ToJsonNull>;
}
