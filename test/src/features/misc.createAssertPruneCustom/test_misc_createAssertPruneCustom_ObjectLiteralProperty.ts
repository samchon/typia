import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_createAssertPruneCustom_ObjectLiteralProperty =
  (): void =>
    _test_misc_assertPrune(CustomGuardError)(
      "ObjectLiteralProperty",
    )<ObjectLiteralProperty>(ObjectLiteralProperty)(
      typia.misc.createAssertPrune<ObjectLiteralProperty>(
        (p) => new CustomGuardError(p),
      ),
    );
