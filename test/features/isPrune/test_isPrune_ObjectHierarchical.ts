import typia from "../../../src";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectHierarchical = _test_isPrune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.isPrune(input),
    ObjectHierarchical.SPOILERS,
);
