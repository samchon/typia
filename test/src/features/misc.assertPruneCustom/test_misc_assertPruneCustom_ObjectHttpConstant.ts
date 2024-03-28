import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_misc_assertPruneCustom_ObjectHttpConstant =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
    typia.misc.assertPrune<ObjectHttpConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
