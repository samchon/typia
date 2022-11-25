import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_array_hierarchical = _test_is_stringify(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.isStringify(input),
    ArrayHierarchical.SPOILERS,
);
