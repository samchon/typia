import typia from "../../../src";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectHierarchical = _test_assertEquals(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createAssertEquals<ObjectHierarchical>(),
);
