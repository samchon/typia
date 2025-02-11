import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArrayRepeatedUnion = _test_assert(CustomGuardError)(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)((input) => typia.assert<ArrayRepeatedUnion>(input, (p) => new CustomGuardError(p)));
