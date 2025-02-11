import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ArrayRepeatedRequired = _test_assert(CustomGuardError)(
    "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(
    ArrayRepeatedRequired
)(typia.createAssert<ArrayRepeatedRequired>((p) => new CustomGuardError(p)));
