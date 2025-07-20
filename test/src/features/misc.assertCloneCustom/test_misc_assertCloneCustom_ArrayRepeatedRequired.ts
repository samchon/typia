import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_misc_assertCloneCustom_ArrayRepeatedRequired = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)((input) =>
    typia.misc.assertClone<ArrayRepeatedRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
