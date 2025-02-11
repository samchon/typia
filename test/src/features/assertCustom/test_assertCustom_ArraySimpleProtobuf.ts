import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArraySimpleProtobuf = _test_assert(CustomGuardError)(
    "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(
    ArraySimpleProtobuf
)((input) => typia.assert<ArraySimpleProtobuf>(input, (p) => new CustomGuardError(p)));
