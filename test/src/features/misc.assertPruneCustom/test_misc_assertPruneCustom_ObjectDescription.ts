import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_assertPruneCustom_ObjectDescription =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)((input) =>
    typia.misc.assertPrune<ObjectDescription>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
