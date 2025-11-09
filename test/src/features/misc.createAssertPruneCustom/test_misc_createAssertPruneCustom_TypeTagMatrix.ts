import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_createAssertPruneCustom_TypeTagMatrix = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )(
    typia.misc.createAssertPrune<TypeTagMatrix>((p) => new CustomGuardError(p)),
  );
