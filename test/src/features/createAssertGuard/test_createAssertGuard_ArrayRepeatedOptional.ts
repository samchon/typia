import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ArrayRepeatedOptional = _test_assertGuard(TypeGuardError)(
    "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(
    ArrayRepeatedOptional
)(typia.createAssertGuard<ArrayRepeatedOptional>());
