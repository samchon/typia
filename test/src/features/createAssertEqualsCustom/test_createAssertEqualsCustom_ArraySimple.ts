import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ArraySimple = _test_assertEquals(CustomGuardError)(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)(typia.createAssertEquals<ArraySimple>((p) => new CustomGuardError(p)));
