import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_assertGuard_ObjectSequenceProtobuf = _test_assertGuard(
  TypeGuardError,
)("ObjectSequenceProtobuf")<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)(
  (input) => typia.assertGuard<ObjectSequenceProtobuf>(input),
);
