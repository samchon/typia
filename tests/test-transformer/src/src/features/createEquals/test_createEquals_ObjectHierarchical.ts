import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createEquals_ObjectHierarchical = (): void => _test_equals(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)(typia.createEquals<ObjectHierarchical>());
