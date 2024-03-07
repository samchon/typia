import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_DynamicEnumeration =
  _test_functional_assertFunctionAsync(TypeGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
    typia.functional.assertFunction(p),
  );
