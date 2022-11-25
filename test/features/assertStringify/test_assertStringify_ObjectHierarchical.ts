import TSON from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectHierarchical = _test_assertStringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => TSON.assertStringify(input),
    ObjectHierarchical.SPOILERS,
);
