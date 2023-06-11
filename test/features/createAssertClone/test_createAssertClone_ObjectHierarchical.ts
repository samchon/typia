import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createAssertClone_ObjectHierarchical = _test_assertClone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createAssertClone<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
