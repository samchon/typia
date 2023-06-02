import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_isParse_ArrayHierarchical = _test_isParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.isParse<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
