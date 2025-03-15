import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_compare_equals_ObjectSimpleProtobuf = _test_compare_equals(
    "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf
)((a, b) => typia.compare.equals<ObjectSimpleProtobuf>(a, b));
