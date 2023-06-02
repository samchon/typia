import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createIsParse_ObjectHierarchical = _test_isParse(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createIsParse<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
