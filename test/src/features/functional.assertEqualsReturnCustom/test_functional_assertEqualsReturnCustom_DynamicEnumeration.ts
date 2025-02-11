import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertEqualsReturnCustom_DynamicEnumeration =
  _test_functional_assertEqualsReturn(CustomGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => DynamicEnumeration) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
