import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_assertPruneCustom_ObjectAlias = _test_misc_assertPrune(
  CustomGuardError,
)("ObjectAlias")<ObjectAlias>(ObjectAlias)((input) =>
  typia.misc.assertPrune<ObjectAlias>(input, (p) => new CustomGuardError(p)),
);
