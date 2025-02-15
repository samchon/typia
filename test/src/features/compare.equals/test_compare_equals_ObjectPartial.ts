import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_compare_equals_ObjectPartial = _test_compare_equals(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((a, b) => typia.compare.equals<ObjectPartial>(a, b));
