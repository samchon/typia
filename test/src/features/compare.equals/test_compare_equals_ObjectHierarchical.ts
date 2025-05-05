import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_compare_equals_ObjectHierarchical = _test_compare_equals(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)((a, b) => typia.compare.equals<ObjectHierarchical>(a, b));
