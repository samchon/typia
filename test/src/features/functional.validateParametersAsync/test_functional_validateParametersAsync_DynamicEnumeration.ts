import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_validateParametersAsync_DynamicEnumeration =
  _test_functional_validateParametersAsync("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
    typia.functional.validateParameters(p),
  );
