import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectHierarchical = _test_isPrune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createIsPrune<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
