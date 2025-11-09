import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ArrayRepeatedNullable = (): void => _test_assert(CustomGuardError)(
    "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(
    ArrayRepeatedNullable
)(typia.createAssert<ArrayRepeatedNullable>((p) => new CustomGuardError(p)));
