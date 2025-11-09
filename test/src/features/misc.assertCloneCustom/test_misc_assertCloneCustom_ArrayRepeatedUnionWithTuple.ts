import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ArrayRepeatedUnionWithTuple = (): void => _test_misc_assertClone(CustomGuardError)(
    "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(
    ArrayRepeatedUnionWithTuple
)((input) => typia.misc.assertClone<ArrayRepeatedUnionWithTuple>(input, (p) => new CustomGuardError(p)));
