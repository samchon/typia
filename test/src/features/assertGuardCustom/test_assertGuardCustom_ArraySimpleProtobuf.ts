import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ArraySimpleProtobuf = _test_assertGuard(
  CustomGuardError,
)("ArraySimpleProtobuf")<ArraySimpleProtobuf>(ArraySimpleProtobuf)((input) =>
  typia.assertGuard<ArraySimpleProtobuf>(input, (p) => new CustomGuardError(p)),
);
