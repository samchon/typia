import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_compare_equals_ObjectUnionDouble = _test_compare_equals(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)((a, b) => typia.compare.equals<ObjectUnionDouble>(a, b));
