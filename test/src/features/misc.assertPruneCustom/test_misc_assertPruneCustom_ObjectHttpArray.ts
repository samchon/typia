import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectHttpArray =
  _test_misc_assertPrune(CustomGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )((input) =>
    typia.misc.assertPrune<ObjectHttpArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
