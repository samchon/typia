import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TypeTagCustom =
  _test_misc_assertPrune(CustomGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )(
    typia.misc.createAssertPrune<TypeTagCustom>((p) => new CustomGuardError(p)),
  );
