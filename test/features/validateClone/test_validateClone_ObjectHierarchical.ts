import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_validateClone_ObjectHierarchical = _test_validateClone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.validateClone(input),
    ObjectHierarchical.SPOILERS,
);
