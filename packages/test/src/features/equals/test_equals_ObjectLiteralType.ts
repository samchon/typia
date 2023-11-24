import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_equals_ObjectLiteralType = _test_equals(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)((input) =>
  typia.equals<ObjectLiteralType>(input),
);
