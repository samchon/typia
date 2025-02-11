import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_assertGuardEquals_ObjectJsonTag = _test_assertGuardEquals(
  TypeGuardError,
)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)((input) =>
  typia.assertGuardEquals<ObjectJsonTag>(input),
);
