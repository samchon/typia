import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectHierarchical = _test_assertStringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createAssertStringify<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
