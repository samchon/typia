import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createIsStringify_ObjectHierarchical = _test_isStringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createIsStringify<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
