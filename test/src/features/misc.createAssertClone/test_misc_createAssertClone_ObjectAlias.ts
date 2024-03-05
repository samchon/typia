import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_createAssertClone_ObjectAlias = _test_misc_assertClone(
  TypeGuardError,
)("ObjectAlias")<ObjectAlias>(ObjectAlias)(
  typia.misc.createAssertClone<ObjectAlias>(),
);
