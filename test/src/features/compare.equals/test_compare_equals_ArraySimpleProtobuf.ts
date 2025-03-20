import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_compare_equals_ArraySimpleProtobuf = _test_compare_equals(
    "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(
    ArraySimpleProtobuf
)((a, b) => typia.compare.equals<ArraySimpleProtobuf>(a, b));
