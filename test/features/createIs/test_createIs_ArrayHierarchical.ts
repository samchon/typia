import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ArrayHierarchical = _test_is(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    TSON.createIs<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
