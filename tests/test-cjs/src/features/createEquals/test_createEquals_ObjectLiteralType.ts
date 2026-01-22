import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createEquals_ObjectLiteralType = (): void =>
  _test_equals("ObjectLiteralType")<ObjectLiteralType>(ObjectLiteralType)(
    typia.createEquals<ObjectLiteralType>(),
  );
