import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ArrayRepeatedNullable = (): void => _test_assertGuard(TypeGuardError)(
    "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(
    ArrayRepeatedNullable
)(typia.createAssertGuard<ArrayRepeatedNullable>());
