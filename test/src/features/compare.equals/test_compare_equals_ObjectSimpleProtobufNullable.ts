import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_compare_equals_ObjectSimpleProtobufNullable = _test_compare_equals(
    "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(
    ObjectSimpleProtobufNullable
)((a, b) => typia.compare.equals<ObjectSimpleProtobufNullable>(a, b));
