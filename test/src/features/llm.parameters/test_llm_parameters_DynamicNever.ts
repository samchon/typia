import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_llm_parameters_DynamicNever = (): void =>
  _test_llm_parameters("DynamicNever")(
    typia.llm.parameters<DynamicNeverParameters>(),
  );

interface DynamicNeverParameters {
  regular: DynamicNever;
  nullable: DynamicNever | null;
  optional: DynamicNever | undefined;
  faint: DynamicNever | null | undefined;
  array: Array<DynamicNever>;
}
