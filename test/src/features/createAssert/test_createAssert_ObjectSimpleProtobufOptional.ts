import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectSimpleProtobufOptional = _test_assert(
  TypeGuardError,
)("ObjectSimpleProtobufOptional")<ObjectSimpleProtobufOptional>(
  ObjectSimpleProtobufOptional,
)(typia.createAssert<ObjectSimpleProtobufOptional>());
