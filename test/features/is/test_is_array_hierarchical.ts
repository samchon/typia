import TSON from "../../../src";
import { IArrayHierarchical } from "../../structures/IArrayHierarchical";
import { _test_is } from "./_test_is";

export const test_is_array_hierarchical = _test_is(
    "hierarchical array",
    IArrayHierarchical.generate(),
    (input) => TSON.is(input),
);
