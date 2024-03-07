import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectSimpleProtobuf = _test_assert(
  CustomGuardError,
)("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)((input) =>
  typia.assert<ObjectSimpleProtobuf>(input, (p) => new CustomGuardError(p)),
);
