import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ObjectHttpNullable =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)(
    typia.misc.createAssertPrune<ObjectHttpNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
