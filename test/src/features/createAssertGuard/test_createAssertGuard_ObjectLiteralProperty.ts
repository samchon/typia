import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createAssertGuard_ObjectLiteralProperty = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)(
    typia.createAssertGuard<ObjectLiteralProperty>(),
  );
