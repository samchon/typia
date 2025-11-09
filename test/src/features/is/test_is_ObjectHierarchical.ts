import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_is_ObjectHierarchical = (): void => _test_is(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)((input) => typia.is<ObjectHierarchical>(input));
