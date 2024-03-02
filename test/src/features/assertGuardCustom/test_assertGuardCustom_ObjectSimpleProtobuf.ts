import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_assertGuardCustom_ObjectSimpleProtobuf = _test_assertGuard(
  CustomGuardError,
)("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)((input) =>
  typia.assertGuard<ObjectSimpleProtobuf>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
