import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssertGuardEquals_ObjectLiteralType = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)(
    typia.createAssertGuardEquals<ObjectLiteralType>(),
  );
