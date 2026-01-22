import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_createAssertPruneCustom_ObjectLiteralType = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)(
    typia.misc.createAssertPrune<ObjectLiteralType>(
      (p) => new CustomGuardError(p),
    ),
  );
