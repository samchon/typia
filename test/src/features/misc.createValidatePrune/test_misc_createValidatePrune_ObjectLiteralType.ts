import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_createValidatePrune_ObjectLiteralType = (): void =>
  _test_misc_validatePrune("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )(typia.misc.createValidatePrune<ObjectLiteralType>());
