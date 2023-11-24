import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssertGuard_ObjectLiteralType = _test_assertGuard(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)(
  typia.createAssertGuard<ObjectLiteralType>(),
);
