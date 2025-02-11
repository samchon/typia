import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_assertGuard_ArraySimpleProtobufNullable = _test_assertGuard(
  TypeGuardError,
)("ArraySimpleProtobufNullable")<ArraySimpleProtobufNullable>(
  ArraySimpleProtobufNullable,
)((input) => typia.assertGuard<ArraySimpleProtobufNullable>(input));
