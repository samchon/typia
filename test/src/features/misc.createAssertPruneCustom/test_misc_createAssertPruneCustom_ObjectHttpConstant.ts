import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ObjectHttpConstant =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)(
    typia.misc.createAssertPrune<ObjectHttpConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
