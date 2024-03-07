import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TypeTagMatrix =
  _test_misc_assertPrune(CustomGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )(
    typia.misc.createAssertPrune<TypeTagMatrix>((p) => new CustomGuardError(p)),
  );
