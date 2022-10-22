import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validate } from "./_test_validate";

export const test_validate_array_hierarchical = _test_validate(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.validate(input),
    ArrayHierarchical.SPOILERS,
);
