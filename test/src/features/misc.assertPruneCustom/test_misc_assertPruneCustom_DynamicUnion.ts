import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_assertPruneCustom_DynamicUnion = (): void =>
  _test_misc_assertPrune(CustomGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )((input) =>
    typia.misc.assertPrune<DynamicUnion>(input, (p) => new CustomGuardError(p)),
  );
