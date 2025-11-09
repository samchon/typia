import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArraySimple = (): void => _test_assert(CustomGuardError)(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)((input) => typia.assert<ArraySimple>(input, (p) => new CustomGuardError(p)));
