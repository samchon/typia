import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ArrayHierarchical = _test_isParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    TSON.createIsParse<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
