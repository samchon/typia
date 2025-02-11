import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_assertGuard_ObjectSimpleProtobufNullable = _test_assertGuard(
  TypeGuardError,
)("ObjectSimpleProtobufNullable")<ObjectSimpleProtobufNullable>(
  ObjectSimpleProtobufNullable,
)((input) => typia.assertGuard<ObjectSimpleProtobufNullable>(input));
