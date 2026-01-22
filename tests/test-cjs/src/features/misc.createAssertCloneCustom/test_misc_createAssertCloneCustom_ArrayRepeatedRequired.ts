import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_misc_createAssertCloneCustom_ArrayRepeatedRequired =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ArrayRepeatedRequired",
    )<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
      typia.misc.createAssertClone<ArrayRepeatedRequired>(
        (p) => new CustomGuardError(p),
      ),
    );
