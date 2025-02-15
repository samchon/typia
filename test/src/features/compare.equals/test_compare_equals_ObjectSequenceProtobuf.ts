import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_compare_equals_ObjectSequenceProtobuf = _test_compare_equals(
    "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(
    ObjectSequenceProtobuf
)((a, b) => typia.compare.equals<ObjectSequenceProtobuf>(a, b));
