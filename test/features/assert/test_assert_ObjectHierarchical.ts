import typia from "../../../src";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectHierarchical = _test_assert(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.assert(input),
    ObjectHierarchical.SPOILERS,
);
