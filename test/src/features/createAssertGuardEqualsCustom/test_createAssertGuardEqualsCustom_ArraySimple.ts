import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ArraySimple = _test_assertGuardEquals(CustomGuardError)(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)(typia.createAssertGuardEquals<ArraySimple>((p) => new CustomGuardError(p)));
