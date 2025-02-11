import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_assertGuardEquals_ObjectHttpTypeTag = _test_assertGuardEquals(
  TypeGuardError,
)("ObjectHttpTypeTag")<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  typia.assertGuardEquals<ObjectHttpTypeTag>(input),
);
