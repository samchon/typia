import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ArrayHierarchical = _test_validateParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => TSON.validateParse<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
