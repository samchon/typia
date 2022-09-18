import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_equals } from "./_test_equals";

export const test_equals_array_hierarchical = _test_equals(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.equals(input),
);
