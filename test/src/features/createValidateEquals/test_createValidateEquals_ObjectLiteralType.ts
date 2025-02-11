import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createValidateEquals_ObjectLiteralType = _test_validateEquals(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)(
  typia.createValidateEquals<ObjectLiteralType>(),
);
