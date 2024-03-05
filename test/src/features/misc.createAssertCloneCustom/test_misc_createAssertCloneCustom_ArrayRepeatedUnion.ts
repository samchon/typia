import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_misc_createAssertCloneCustom_ArrayRepeatedUnion =
  _test_misc_assertClone(CustomGuardError)(
    "ArrayRepeatedUnion",
  )<ArrayRepeatedUnion>(ArrayRepeatedUnion)(
    typia.misc.createAssertClone<ArrayRepeatedUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
