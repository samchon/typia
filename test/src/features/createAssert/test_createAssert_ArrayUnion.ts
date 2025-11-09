import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_ArrayUnion = (): void => _test_assert(TypeGuardError)(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)(typia.createAssert<ArrayUnion>());
