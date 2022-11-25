import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_array_hierarchical = _test_stringify(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.stringify(input),
);
