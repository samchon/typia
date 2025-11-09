import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ArrayRepeatedUnionWithTuple = (): void => _test_assert(CustomGuardError)(
    "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(
    ArrayRepeatedUnionWithTuple
)(typia.createAssert<ArrayRepeatedUnionWithTuple>((p) => new CustomGuardError(p)));
