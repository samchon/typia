import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssertEquals_ObjectLiteralType = _test_assertEquals(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)(
  typia.createAssertEquals<ObjectLiteralType>(),
);
