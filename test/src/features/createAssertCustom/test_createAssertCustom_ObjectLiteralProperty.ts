import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createAssertCustom_ObjectLiteralProperty = _test_assert(
  CustomGuardError,
)("ObjectLiteralProperty")<ObjectLiteralProperty>(ObjectLiteralProperty)(
  typia.createAssert<ObjectLiteralProperty>((p) => new CustomGuardError(p)),
);
