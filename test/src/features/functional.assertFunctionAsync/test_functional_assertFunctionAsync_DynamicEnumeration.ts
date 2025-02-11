import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertFunctionAsync_DynamicEnumeration =
  _test_functional_assertFunctionAsync(TypeGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
    typia.functional.assertFunction(p),
  );
