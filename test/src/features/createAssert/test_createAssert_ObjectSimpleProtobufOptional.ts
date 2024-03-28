import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_createAssert_ObjectSimpleProtobufOptional = _test_assert(
  TypeGuardError,
)("ObjectSimpleProtobufOptional")<ObjectSimpleProtobufOptional>(
  ObjectSimpleProtobufOptional,
)(typia.createAssert<ObjectSimpleProtobufOptional>());
