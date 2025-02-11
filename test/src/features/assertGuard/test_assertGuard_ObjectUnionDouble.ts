import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assertGuard_ObjectUnionDouble = _test_assertGuard(
  TypeGuardError,
)("ObjectUnionDouble")<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  typia.assertGuard<ObjectUnionDouble>(input),
);
