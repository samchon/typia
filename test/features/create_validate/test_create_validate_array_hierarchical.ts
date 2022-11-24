import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_array_hierarchical = _test_validate(
    "hierarchical array",
    ArrayHierarchical.generate,
    TSON.createValidate<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
