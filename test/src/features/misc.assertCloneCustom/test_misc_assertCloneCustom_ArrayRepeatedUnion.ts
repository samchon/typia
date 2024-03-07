import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ArrayRepeatedUnion =
  _test_misc_assertClone(CustomGuardError)(
    "ArrayRepeatedUnion",
  )<ArrayRepeatedUnion>(ArrayRepeatedUnion)((input) =>
    typia.misc.assertClone<ArrayRepeatedUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
