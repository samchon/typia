import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ArrayHierarchical = _test_validate(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => TSON.validate(input),
    ArrayHierarchical.SPOILERS,
);
