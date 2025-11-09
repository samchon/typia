import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_createAssertPruneCustom_ObjectTuple = (): void =>
  _test_misc_assertPrune(CustomGuardError)("ObjectTuple")<ObjectTuple>(
    ObjectTuple,
  )(typia.misc.createAssertPrune<ObjectTuple>((p) => new CustomGuardError(p)));
