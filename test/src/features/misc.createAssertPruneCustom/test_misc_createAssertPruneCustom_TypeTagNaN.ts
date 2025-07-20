import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_misc_createAssertPruneCustom_TypeTagNaN = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TypeTagNaN")<TypeTagNaN>(
    TypeTagNaN,
  )(typia.misc.createAssertPrune<TypeTagNaN>((p) => new CustomGuardError(p)));
