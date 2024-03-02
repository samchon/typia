import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_assertPruneCustom_ObjectPartialAndRequired =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.misc.assertPrune<ObjectPartialAndRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
