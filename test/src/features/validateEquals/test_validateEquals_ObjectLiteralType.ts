import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_validateEquals_ObjectLiteralType = (): void =>
  _test_validateEquals("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )((input) => typia.validateEquals<ObjectLiteralType>(input));
