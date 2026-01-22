import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_assert_ObjectLiteralProperty = (): void =>
  _test_assert(TypeGuardError)("ObjectLiteralProperty")<ObjectLiteralProperty>(
    ObjectLiteralProperty,
  )((input) => typia.assert<ObjectLiteralProperty>(input));
