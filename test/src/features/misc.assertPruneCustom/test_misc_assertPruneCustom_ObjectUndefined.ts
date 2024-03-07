import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectUndefined =
  _test_misc_assertPrune(CustomGuardError)("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )((input) =>
    typia.misc.assertPrune<ObjectUndefined>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
