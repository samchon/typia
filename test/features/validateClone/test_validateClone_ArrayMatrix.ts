import typia from "typia";

import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ArrayMatrix = _test_validateClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.validateClone(input),
    ArrayMatrix.SPOILERS,
);
