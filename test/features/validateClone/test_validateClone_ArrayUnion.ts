import typia from "typia";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ArrayUnion = _test_validateClone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.validateClone(input),
    ArrayUnion.SPOILERS,
);
