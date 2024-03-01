import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_assertGuardCustom_ObjectLiteralType = _test_assertGuard(
  CustomGuardError,
)("ObjectLiteralType")<ObjectLiteralType>(ObjectLiteralType)((input) =>
  typia.assertGuard<ObjectLiteralType>(input, (p) => new CustomGuardError(p)),
);
