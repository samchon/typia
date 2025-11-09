import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { TypeGuardError } from "typia";

export const test_assert_ArrayRepeatedOptional = (): void => _test_assert(TypeGuardError)(
    "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(
    ArrayRepeatedOptional
)((input) => typia.assert<ArrayRepeatedOptional>(input));
