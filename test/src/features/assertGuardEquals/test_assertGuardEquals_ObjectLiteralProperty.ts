import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_assertGuardEquals_ObjectLiteralProperty = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
    typia.assertGuardEquals<ObjectLiteralProperty>(input),
  );
