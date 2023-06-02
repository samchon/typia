import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createClone_ArrayHierarchical = _test_clone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createClone<ArrayHierarchical>(),
);
