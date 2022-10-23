import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_array_hierarchical = _test_equals(
    "hierarchical array",
    ArrayHierarchical.generate,
    TSON.createEquals<ArrayHierarchical>(),
);
