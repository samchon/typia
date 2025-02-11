import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertFunctionAsyncCustom_DynamicEnumeration =
  _test_functional_assertFunctionAsync(CustomGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
