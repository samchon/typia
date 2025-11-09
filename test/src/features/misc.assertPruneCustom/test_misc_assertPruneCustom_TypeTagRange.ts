import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_assertPruneCustom_TypeTagRange = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )((input) =>
    typia.misc.assertPrune<TypeTagRange>(input, (p) => new CustomGuardError(p)),
  );
