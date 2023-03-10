import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createValidateParse_ArrayHierarchical = _test_validateParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createValidateParse<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
