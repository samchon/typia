import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArraySimple } from "../../structures/ArraySimple";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ArraySimple = (): void => _test_misc_assertClone(TypeGuardError)(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)(typia.misc.createAssertClone<ArraySimple>());
