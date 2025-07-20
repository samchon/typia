import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_misc_createAssertPruneCustom_ObjectHttpNullable = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)(
    typia.misc.createAssertPrune<ObjectHttpNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
