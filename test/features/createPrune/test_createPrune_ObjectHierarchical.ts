import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectHierarchical = _test_prune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createPrune<ObjectHierarchical>(),
);
