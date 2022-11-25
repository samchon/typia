import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ArrayHierarchical = _test_clone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    TSON.createClone<ArrayHierarchical>(),
);
