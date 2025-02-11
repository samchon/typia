import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createAssertGuardEquals_ObjectAlias = _test_assertGuardEquals(
  TypeGuardError,
)("ObjectAlias")<ObjectAlias>(ObjectAlias)(
  typia.createAssertGuardEquals<ObjectAlias>(),
);
