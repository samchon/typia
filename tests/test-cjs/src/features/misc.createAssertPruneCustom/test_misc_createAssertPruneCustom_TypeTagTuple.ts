import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_createAssertPruneCustom_TypeTagTuple = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )(typia.misc.createAssertPrune<TypeTagTuple>((p) => new CustomGuardError(p)));
