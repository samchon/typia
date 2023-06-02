import typia from "../../../src";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_clone } from "../../internal/_test_clone";

export const test_clone_ArrayRecursive = _test_clone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.clone(input),
);
