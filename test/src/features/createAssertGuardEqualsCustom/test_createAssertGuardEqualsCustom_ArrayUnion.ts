import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ArrayUnion = _test_assertGuardEquals(CustomGuardError)(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)(typia.createAssertGuardEquals<ArrayUnion>((p) => new CustomGuardError(p)));
