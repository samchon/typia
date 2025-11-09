import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_assertPruneCustom_ObjectTuple = (): void =>
  _test_misc_assertPrune(CustomGuardError)("ObjectTuple")<ObjectTuple>(
    ObjectTuple,
  )((input) =>
    typia.misc.assertPrune<ObjectTuple>(input, (p) => new CustomGuardError(p)),
  );
