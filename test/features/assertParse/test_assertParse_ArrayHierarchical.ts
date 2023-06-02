import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_assertParse_ArrayHierarchical = _test_assertParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.assertParse<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
