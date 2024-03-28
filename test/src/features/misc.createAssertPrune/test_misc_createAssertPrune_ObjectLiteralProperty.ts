import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_createAssertPrune_ObjectLiteralProperty =
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)(
    typia.misc.createAssertPrune<ObjectLiteralProperty>(),
  );
