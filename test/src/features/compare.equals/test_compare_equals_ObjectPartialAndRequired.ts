import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_compare_equals_ObjectPartialAndRequired = _test_compare_equals(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)((a, b) => typia.compare.equals<ObjectPartialAndRequired>(a, b));
