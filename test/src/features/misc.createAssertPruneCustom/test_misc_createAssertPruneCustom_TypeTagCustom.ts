import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_createAssertPruneCustom_TypeTagCustom = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )(
    typia.misc.createAssertPrune<TypeTagCustom>((p) => new CustomGuardError(p)),
  );
