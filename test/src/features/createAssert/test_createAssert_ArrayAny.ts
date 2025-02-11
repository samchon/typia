import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAny } from "../../structures/ArrayAny";

import { TypeGuardError } from "typia";

export const test_createAssert_ArrayAny = _test_assert(TypeGuardError)(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)(typia.createAssert<ArrayAny>());
