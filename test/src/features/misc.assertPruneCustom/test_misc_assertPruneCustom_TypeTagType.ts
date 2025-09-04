import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_assertPruneCustom_TypeTagType = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )((input) =>
    typia.misc.assertPrune<TypeTagType>(input, (p) => new CustomGuardError(p)),
  );
