import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_createAssertCustom_ObjectSequenceProtobuf = _test_assert(
  CustomGuardError,
)("ObjectSequenceProtobuf")<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)(
  typia.createAssert<ObjectSequenceProtobuf>((p) => new CustomGuardError(p)),
);
