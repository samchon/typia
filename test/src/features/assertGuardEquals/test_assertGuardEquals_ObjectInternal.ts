import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ObjectInternal = _test_assertGuardEquals(
  TypeGuardError,
)("ObjectInternal")<ObjectInternal>(ObjectInternal)((input) =>
  typia.assertGuardEquals<ObjectInternal>(input),
);
