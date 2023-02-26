import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createAssert_ObjectHierarchical = _test_assert(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createAssert<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
