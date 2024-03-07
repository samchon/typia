import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_assert_ArraySimpleProtobufOptional = _test_assert(
  TypeGuardError,
)("ArraySimpleProtobufOptional")<ArraySimpleProtobufOptional>(
  ArraySimpleProtobufOptional,
)((input) => typia.assert<ArraySimpleProtobufOptional>(input));
