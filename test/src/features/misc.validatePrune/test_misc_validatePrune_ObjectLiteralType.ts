import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_validatePrune_ObjectLiteralType = (): void =>
  _test_misc_validatePrune("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )((input) => typia.misc.validatePrune<ObjectLiteralType>(input));
