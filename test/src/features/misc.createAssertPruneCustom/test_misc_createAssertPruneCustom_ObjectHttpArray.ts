import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_misc_createAssertPruneCustom_ObjectHttpArray = (): void =>
  _test_misc_assertPrune(CustomGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(
    typia.misc.createAssertPrune<ObjectHttpArray>(
      (p) => new CustomGuardError(p),
    ),
  );
