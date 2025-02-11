import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { TypeGuardError } from "typia";

export const test_assertGuard_ArrayRepeatedOptional = _test_assertGuard(TypeGuardError)(
    "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(
    ArrayRepeatedOptional
)((input) => typia.assertGuard<ArrayRepeatedOptional>(input));
