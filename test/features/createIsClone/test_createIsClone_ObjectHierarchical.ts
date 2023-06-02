import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createIsClone_ObjectHierarchical = _test_isClone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createIsClone<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
