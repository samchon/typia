import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssertGuard_ObjectLiteralType = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )(typia.createAssertGuard<ObjectLiteralType>());
