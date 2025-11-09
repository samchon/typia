import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_createAssertPruneCustom_TypeTagType = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )(typia.misc.createAssertPrune<TypeTagType>((p) => new CustomGuardError(p)));
