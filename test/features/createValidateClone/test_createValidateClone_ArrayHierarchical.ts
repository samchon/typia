import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ArrayHierarchical = _test_validateClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createValidateClone<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
