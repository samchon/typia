import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_assertGuardEqualsCustom_ObjectAlias = _test_assertGuardEquals(
  CustomGuardError,
)("ObjectAlias")<ObjectAlias>(ObjectAlias)((input) =>
  typia.assertGuardEquals<ObjectAlias>(input, (p) => new CustomGuardError(p)),
);
