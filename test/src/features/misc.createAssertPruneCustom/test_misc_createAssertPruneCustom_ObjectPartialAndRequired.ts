import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_createAssertPruneCustom_ObjectPartialAndRequired =
  (): void =>
    _test_misc_assertPrune(CustomGuardError)(
      "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
      typia.misc.createAssertPrune<ObjectPartialAndRequired>(
        (p) => new CustomGuardError(p),
      ),
    );
