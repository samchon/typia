import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectHierarchical = _test_isStringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.isStringify(input),
    ObjectHierarchical.SPOILERS,
);
