import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ArrayHierarchical = _test_validateEquals(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    TSON.createValidateEquals<ArrayHierarchical>(),
);