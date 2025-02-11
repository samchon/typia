import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

import { TypeGuardError } from "typia";

export const test_assert_ObjectSequenceProtobuf = _test_assert(TypeGuardError)(
    "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(
    ObjectSequenceProtobuf
)((input) => typia.assert<ObjectSequenceProtobuf>(input));
