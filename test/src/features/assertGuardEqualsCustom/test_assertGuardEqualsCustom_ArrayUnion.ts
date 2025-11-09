import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ArrayUnion = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)((input) => typia.assertGuardEquals<ArrayUnion>(input, (p) => new CustomGuardError(p)));
