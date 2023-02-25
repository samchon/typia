import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectHierarchical = _test_is(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createIs<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
