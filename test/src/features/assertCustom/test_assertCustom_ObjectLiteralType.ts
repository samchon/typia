import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_assertCustom_ObjectLiteralType = _test_assert(
  CustomGuardError,
)("ObjectLiteralType")<ObjectLiteralType>(ObjectLiteralType)((input) =>
  typia.assert<ObjectLiteralType>(input, (p) => new CustomGuardError(p)),
);
