import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ArrayRepeatedUnion = (): void => _test_assertGuard(CustomGuardError)(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)((input) => typia.assertGuard<ArrayRepeatedUnion>(input, (p) => new CustomGuardError(p)));
