import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_assertEqualsCustom_ObjectLiteralType = _test_assertEquals(
  CustomGuardError,
)("ObjectLiteralType")<ObjectLiteralType>(ObjectLiteralType)((input) =>
  typia.assertEquals<ObjectLiteralType>(input, (p) => new CustomGuardError(p)),
);
