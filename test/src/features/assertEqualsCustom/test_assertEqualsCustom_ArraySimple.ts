import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ArraySimple = (): void => _test_assertEquals(CustomGuardError)(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)((input) => typia.assertEquals<ArraySimple>(input, (p) => new CustomGuardError(p)));
