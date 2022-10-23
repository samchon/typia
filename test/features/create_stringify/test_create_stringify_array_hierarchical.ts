import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_array_hierarchical = _test_stringify(
    "hierarchical array",
    ArrayHierarchical.generate(),
    TSON.createStringify<ArrayHierarchical>(),
);
