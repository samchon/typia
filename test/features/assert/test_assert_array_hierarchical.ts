import TSON from "../../../src";
import { IArrayHierarchical } from "../../structures/IArrayHierarchical";
import { _test_assert } from "./_test_assert";

export const test_assert_array_hierarchical = _test_assert(
    "hierarchical array",
    IArrayHierarchical.generate(),
    (input) => TSON.assert(input),
);
