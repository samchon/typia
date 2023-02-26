import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectHierarchical = _test_validateClone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createValidateClone<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
