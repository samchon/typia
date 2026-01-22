import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_assertGuard_ObjectLiteralProperty = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
    typia.assertGuard<ObjectLiteralProperty>(input),
  );
