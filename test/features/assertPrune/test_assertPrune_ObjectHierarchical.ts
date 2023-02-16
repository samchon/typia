import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectHierarchical = _test_assertPrune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.assertPrune(input),
    ObjectHierarchical.SPOILERS,
);
