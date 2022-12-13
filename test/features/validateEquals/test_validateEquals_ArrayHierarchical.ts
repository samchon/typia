import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ArrayHierarchical = _test_validateEquals(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.validateEquals(input),
);
