import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_assert_ArraySimpleProtobufNullable = _test_assert(
  TypeGuardError,
)("ArraySimpleProtobufNullable")<ArraySimpleProtobufNullable>(
  ArraySimpleProtobufNullable,
)((input) => typia.assert<ArraySimpleProtobufNullable>(input));
