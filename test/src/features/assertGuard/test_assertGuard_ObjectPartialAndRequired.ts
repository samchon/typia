import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_assertGuard_ObjectPartialAndRequired = _test_assertGuard(
  TypeGuardError,
)("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
  ObjectPartialAndRequired,
)((input) => typia.assertGuard<ObjectPartialAndRequired>(input));
