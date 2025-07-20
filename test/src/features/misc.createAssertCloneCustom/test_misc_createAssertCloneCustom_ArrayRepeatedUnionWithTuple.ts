import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_misc_createAssertCloneCustom_ArrayRepeatedUnionWithTuple =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
      typia.misc.createAssertClone<ArrayRepeatedUnionWithTuple>(
        (p) => new CustomGuardError(p),
      ),
    );
