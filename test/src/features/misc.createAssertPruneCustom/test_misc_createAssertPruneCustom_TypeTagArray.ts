import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_createAssertPruneCustom_TypeTagArray =
  _test_misc_assertPrune(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )(typia.misc.createAssertPrune<TypeTagArray>((p) => new CustomGuardError(p)));
