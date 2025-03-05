import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_compare_equals_ObjectHttpTypeTag = _test_compare_equals(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)((a, b) => typia.compare.equals<ObjectHttpTypeTag>(a, b));
