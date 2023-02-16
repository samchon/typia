import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectHierarchical = _test_random(
    "ObjectHierarchical",
    () => typia.random<ObjectHierarchical>(),
    typia.createAssert<typia.Primitive<ObjectHierarchical>>(),
);
