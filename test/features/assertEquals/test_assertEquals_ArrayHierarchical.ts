import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ArrayHierarchical = _test_assertEquals(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.assertEquals(input),
);
