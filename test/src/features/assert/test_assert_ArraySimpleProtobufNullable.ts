import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_assert_ArraySimpleProtobufNullable = (): void => _test_assert(TypeGuardError)(
    "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(
    ArraySimpleProtobufNullable
)((input) => typia.assert<ArraySimpleProtobufNullable>(input));
