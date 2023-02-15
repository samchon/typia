import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectHierarchical = _test_equals(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createEquals<ObjectHierarchical>(),
);
