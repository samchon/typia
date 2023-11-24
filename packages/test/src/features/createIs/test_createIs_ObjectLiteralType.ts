import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createIs_ObjectLiteralType = _test_is(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)(typia.createIs<ObjectLiteralType>());
