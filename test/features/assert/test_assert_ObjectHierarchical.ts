import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_assert_ObjectHierarchical = _test_assert(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.assert(input),
    ObjectHierarchical.SPOILERS,
);
