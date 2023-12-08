import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssertGuardEquals_ObjectLiteralType =
  _test_assertGuardEquals("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )(typia.createAssertGuardEquals<ObjectLiteralType>());
