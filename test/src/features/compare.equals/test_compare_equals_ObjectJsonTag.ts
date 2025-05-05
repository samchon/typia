import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_compare_equals_ObjectJsonTag = _test_compare_equals(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)((a, b) => typia.compare.equals<ObjectJsonTag>(a, b));
