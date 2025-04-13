import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_assert_ArraySimpleProtobuf = _test_assert(TypeGuardError)(
    "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(
    ArraySimpleProtobuf
)((input) => typia.assert<ArraySimpleProtobuf>(input));
