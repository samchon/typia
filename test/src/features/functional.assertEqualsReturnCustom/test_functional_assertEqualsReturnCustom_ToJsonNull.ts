import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ToJsonNull = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => ToJsonNull) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)