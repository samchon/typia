import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_assertClone_ObjectHierarchical = _test_assertClone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.assertClone(input),
    ObjectHierarchical.SPOILERS,
);
