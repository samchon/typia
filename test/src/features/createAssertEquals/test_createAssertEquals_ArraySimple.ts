import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArraySimple } from "../../structures/ArraySimple";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ArraySimple = _test_assertEquals(TypeGuardError)(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)(typia.createAssertEquals<ArraySimple>());
