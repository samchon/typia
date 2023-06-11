import typia from "../../../src";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectHierarchical = _test_assertPrune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createAssertPrune<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
