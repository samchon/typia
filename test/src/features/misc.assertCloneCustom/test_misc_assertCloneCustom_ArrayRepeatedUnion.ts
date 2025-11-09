import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_misc_assertCloneCustom_ArrayRepeatedUnion = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ArrayRepeatedUnion",
  )<ArrayRepeatedUnion>(ArrayRepeatedUnion)((input) =>
    typia.misc.assertClone<ArrayRepeatedUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
