import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_ArrayRepeatedUnion = _test_assert(TypeGuardError)(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)(typia.createAssert<ArrayRepeatedUnion>());
