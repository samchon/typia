import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectHierarchical = _test_clone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createClone<ObjectHierarchical>(),
);
