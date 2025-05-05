import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_compare_equals_ArraySimpleProtobufNullable = _test_compare_equals(
    "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(
    ArraySimpleProtobufNullable
)((a, b) => typia.compare.equals<ArraySimpleProtobufNullable>(a, b));
