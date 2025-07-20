import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_llm_parameters_llama_ToJsonDouble = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "ToJsonDouble",
  })(typia.llm.parameters<ToJsonDoubleParameters, "llama">());

interface ToJsonDoubleParameters {
  regular: ToJsonDouble;
  nullable: ToJsonDouble | null;
  optional: ToJsonDouble | undefined;
  faint: ToJsonDouble | null | undefined;
  array: Array<ToJsonDouble>;
}
