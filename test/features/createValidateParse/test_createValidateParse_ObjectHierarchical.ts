import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createValidateParse_ObjectHierarchical = _test_validateParse(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createValidateParse<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
