import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_compare_equals_ObjectSimpleProtobufOptional = _test_compare_equals(
    "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(
    ObjectSimpleProtobufOptional
)((a, b) => typia.compare.equals<ObjectSimpleProtobufOptional>(a, b));
