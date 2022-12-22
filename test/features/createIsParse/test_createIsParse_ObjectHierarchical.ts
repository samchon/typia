import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectHierarchical = _test_isParse(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createIsParse<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
