import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_compare_equals_ObjectInternal = _test_compare_equals(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)((a, b) => typia.compare.equals<ObjectInternal>(a, b));
