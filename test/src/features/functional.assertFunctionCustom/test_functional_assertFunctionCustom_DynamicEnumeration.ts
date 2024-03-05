import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertFunctionCustom_DynamicEnumeration =
  _test_functional_assertFunction(CustomGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => DynamicEnumeration) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
