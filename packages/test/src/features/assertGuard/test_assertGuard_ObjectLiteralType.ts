import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_assertGuard_ObjectLiteralType = _test_assertGuard(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)((input) =>
  typia.assertGuard<ObjectLiteralType>(input),
);
