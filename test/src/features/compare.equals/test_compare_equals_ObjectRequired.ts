import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_compare_equals_ObjectRequired = _test_compare_equals(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((a, b) => typia.compare.equals<ObjectRequired>(a, b));
