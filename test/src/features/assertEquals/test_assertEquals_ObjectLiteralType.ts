import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { TypeGuardError } from "typia";

export const test_assertEquals_ObjectLiteralType = _test_assertEquals(
  TypeGuardError,
)("ObjectLiteralType")<ObjectLiteralType>(ObjectLiteralType)((input) =>
  typia.assertEquals<ObjectLiteralType>(input),
);
