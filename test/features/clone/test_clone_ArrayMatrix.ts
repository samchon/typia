import typia from "typia";

import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ArrayMatrix = _test_clone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.clone(input),
);
