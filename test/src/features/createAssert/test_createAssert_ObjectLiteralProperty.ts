import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createAssert_ObjectLiteralProperty = (): void =>
  _test_assert(TypeGuardError)("ObjectLiteralProperty")<ObjectLiteralProperty>(
    ObjectLiteralProperty,
  )(typia.createAssert<ObjectLiteralProperty>());
