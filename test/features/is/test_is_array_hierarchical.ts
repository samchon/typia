import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_is } from "./_test_is";

export const test_is_array_hierarchical = _test_is(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.is(input),
);
