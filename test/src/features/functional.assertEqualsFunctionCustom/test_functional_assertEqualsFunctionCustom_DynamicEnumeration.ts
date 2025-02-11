import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertEqualsFunctionCustom_DynamicEnumeration =
  _test_functional_assertEqualsFunction(CustomGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => DynamicEnumeration) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
