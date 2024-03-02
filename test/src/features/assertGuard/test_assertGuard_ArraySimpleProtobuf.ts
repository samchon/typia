import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_assertGuard_ArraySimpleProtobuf = _test_assertGuard(
  TypeGuardError,
)("ArraySimpleProtobuf")<ArraySimpleProtobuf>(ArraySimpleProtobuf)((input) =>
  typia.assertGuard<ArraySimpleProtobuf>(input),
);
