import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertParametersAsync_DynamicEnumeration =
  _test_functional_assertParametersAsync(TypeGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
    typia.functional.assertParameters(p),
  );
