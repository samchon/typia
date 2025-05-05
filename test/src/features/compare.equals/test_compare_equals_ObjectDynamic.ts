import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_compare_equals_ObjectDynamic = _test_compare_equals(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)((a, b) => typia.compare.equals<ObjectDynamic>(a, b));
