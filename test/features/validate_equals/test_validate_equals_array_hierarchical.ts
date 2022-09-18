import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_array_hierarchical = _test_validate_equals(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.validateEquals(input),
);
