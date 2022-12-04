import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ArrayHierarchical = _test_validateParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    TSON.createValidateParse<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
