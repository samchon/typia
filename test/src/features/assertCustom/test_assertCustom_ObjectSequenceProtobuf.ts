import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectSequenceProtobuf = _test_assert(CustomGuardError)(
    "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(
    ObjectSequenceProtobuf
)((input) => typia.assert<ObjectSequenceProtobuf>(input, (p) => new CustomGuardError(p)));
