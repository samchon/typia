import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectTuple = _test_misc_assertPrune(
  CustomGuardError,
)("ObjectTuple")<ObjectTuple>(ObjectTuple)((input) =>
  typia.misc.assertPrune<ObjectTuple>(input, (p) => new CustomGuardError(p)),
);
