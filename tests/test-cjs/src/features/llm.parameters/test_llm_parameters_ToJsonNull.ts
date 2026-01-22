import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_llm_parameters_ToJsonNull = (): void =>
  _test_llm_parameters("ToJsonNull")(
    typia.llm.parameters<ToJsonNullParameters>(),
  );

interface ToJsonNullParameters {
  regular: ToJsonNull;
  nullable: ToJsonNull | null;
  optional: ToJsonNull | undefined;
  faint: ToJsonNull | null | undefined;
  array: Array<ToJsonNull>;
}
