import typia from "typia";

import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ArrayMatrix = _test_validateParse(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.validateParse<ArrayMatrix>(input),
    ArrayMatrix.SPOILERS,
);
