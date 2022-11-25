import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ArrayHierarchical = _test_equals(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    TSON.createEquals<ArrayHierarchical>(),
);