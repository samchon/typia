import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_assertPruneCustom_TypeTagTuple = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )((input) =>
    typia.misc.assertPrune<TypeTagTuple>(input, (p) => new CustomGuardError(p)),
  );
