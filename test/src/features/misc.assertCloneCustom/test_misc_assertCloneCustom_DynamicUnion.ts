import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_assertCloneCustom_DynamicUnion = (): void =>
  _test_misc_assertClone(CustomGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )((input) =>
    typia.misc.assertClone<DynamicUnion>(input, (p) => new CustomGuardError(p)),
  );
