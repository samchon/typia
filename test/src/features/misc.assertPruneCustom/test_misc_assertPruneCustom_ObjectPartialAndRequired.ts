import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectPartialAndRequired =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.misc.assertPrune<ObjectPartialAndRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
