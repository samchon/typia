import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ArrayRepeatedUnion = (): void => _test_misc_assertClone(TypeGuardError)(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)(typia.misc.createAssertClone<ArrayRepeatedUnion>());
