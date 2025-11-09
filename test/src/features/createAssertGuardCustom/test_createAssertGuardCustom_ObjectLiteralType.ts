import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssertGuardCustom_ObjectLiteralType = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )(typia.createAssertGuard<ObjectLiteralType>((p) => new CustomGuardError(p)));
