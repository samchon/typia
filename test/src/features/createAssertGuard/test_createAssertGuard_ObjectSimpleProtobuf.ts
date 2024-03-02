import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_createAssertGuard_ObjectSimpleProtobuf = _test_assertGuard(
  TypeGuardError,
)("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)(
  typia.createAssertGuard<ObjectSimpleProtobuf>(),
);
