import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectHierarchical = _test_isClone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createIsClone<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
