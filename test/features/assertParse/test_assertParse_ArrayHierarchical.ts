import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ArrayHierarchical = _test_assertParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => TSON.assertParse<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
