import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_createIsPrune_ObjectLiteralType = _test_misc_isPrune(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)(
  typia.misc.createIsPrune<ObjectLiteralType>(),
);
