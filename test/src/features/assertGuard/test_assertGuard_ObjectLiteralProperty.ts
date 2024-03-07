import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectLiteralProperty = _test_assertGuard(
  TypeGuardError,
)("ObjectLiteralProperty")<ObjectLiteralProperty>(ObjectLiteralProperty)(
  (input) => typia.assertGuard<ObjectLiteralProperty>(input),
);
