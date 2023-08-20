import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_isClone_ObjectHierarchical = _test_isClone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.isClone<ObjectHierarchical>(input),
    ObjectHierarchical.SPOILERS,
);
