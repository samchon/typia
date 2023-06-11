import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_isStringify_ObjectHierarchical = _test_isStringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.isStringify(input),
    ObjectHierarchical.SPOILERS,
);
