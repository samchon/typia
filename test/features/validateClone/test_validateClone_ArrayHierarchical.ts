import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ArrayHierarchical = _test_validateClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => TSON.validateClone(input),
    ArrayHierarchical.SPOILERS,
);
