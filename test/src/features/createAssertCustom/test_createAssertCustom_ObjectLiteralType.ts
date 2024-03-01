import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssertCustom_ObjectLiteralType = _test_assert(
  CustomGuardError,
)("ObjectLiteralType")<ObjectLiteralType>(ObjectLiteralType)(
  typia.createAssert<ObjectLiteralType>((p) => new CustomGuardError(p)),
);
