import TSON from "../../../src";
import { IArrayHierarchical } from "../../structures/IArrayHierarchical";
import { _test_stringify } from "./internal/_test_stringify";

export const test_stringify_array_hierarchical = _test_stringify(
    "hierarchical array",
    IArrayHierarchical.generate(),
    (input) => TSON.stringify(input),
);
