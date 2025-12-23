import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_llm_parameters_DynamicEnumeration = (): void =>
  _test_llm_parameters("DynamicEnumeration")(
    typia.llm.parameters<DynamicEnumerationParameters>(),
  );

interface DynamicEnumerationParameters {
  regular: DynamicEnumeration;
  nullable: DynamicEnumeration | null;
  optional: DynamicEnumeration | undefined;
  faint: DynamicEnumeration | null | undefined;
  array: Array<DynamicEnumeration>;
}
