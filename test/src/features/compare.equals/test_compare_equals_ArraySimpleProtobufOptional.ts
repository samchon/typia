import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_compare_equals_ArraySimpleProtobufOptional = _test_compare_equals(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(
    ArraySimpleProtobufOptional
)((a, b) => typia.compare.equals<ArraySimpleProtobufOptional>(a, b));
