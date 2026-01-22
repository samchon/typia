import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_misc_createAssertPruneCustom_ObjectHttpAtomic = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpAtomic",
  )<ObjectHttpAtomic>(ObjectHttpAtomic)(
    typia.misc.createAssertPrune<ObjectHttpAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
