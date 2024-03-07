import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ObjectTuple =
  _test_misc_assertPrune(CustomGuardError)("ObjectTuple")<ObjectTuple>(
    ObjectTuple,
  )(typia.misc.createAssertPrune<ObjectTuple>((p) => new CustomGuardError(p)));
