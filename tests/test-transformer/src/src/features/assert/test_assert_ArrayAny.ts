import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAny } from "../../structures/ArrayAny";

import { TypeGuardError } from "typia";

export const test_assert_ArrayAny = (): void => _test_assert(TypeGuardError)(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)((input) => typia.assert<ArrayAny>(input));
