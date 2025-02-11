import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ArrayUnion = _test_assertEquals(CustomGuardError)(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)((input) => typia.assertEquals<ArrayUnion>(input, (p) => new CustomGuardError(p)));
