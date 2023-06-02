import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createAssertParse_ObjectHierarchical = _test_assertParse(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createAssertParse<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
