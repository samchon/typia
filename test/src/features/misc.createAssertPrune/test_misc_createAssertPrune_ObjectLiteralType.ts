import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectLiteralType =
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)(
    typia.misc.createAssertPrune<ObjectLiteralType>(),
  );
