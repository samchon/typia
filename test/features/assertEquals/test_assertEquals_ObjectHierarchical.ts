import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectHierarchical = _test_assertEquals(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.assertEquals(input),
);
