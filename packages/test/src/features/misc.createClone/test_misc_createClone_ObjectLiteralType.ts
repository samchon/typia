import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_createClone_ObjectLiteralType = _test_misc_clone(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)(
  typia.misc.createClone<ObjectLiteralType>(),
);
