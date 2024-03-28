import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_assertGuard_ObjectHttpTypeTag = _test_assertGuard(
  TypeGuardError,
)("ObjectHttpTypeTag")<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  typia.assertGuard<ObjectHttpTypeTag>(input),
);
