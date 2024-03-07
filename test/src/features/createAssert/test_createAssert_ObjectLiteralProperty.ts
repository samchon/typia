import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectLiteralProperty = _test_assert(
  TypeGuardError,
)("ObjectLiteralProperty")<ObjectLiteralProperty>(ObjectLiteralProperty)(
  typia.createAssert<ObjectLiteralProperty>(),
);
