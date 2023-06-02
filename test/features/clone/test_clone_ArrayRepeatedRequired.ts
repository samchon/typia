import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_clone } from "../../internal/_test_clone";

export const test_clone_ArrayRepeatedRequired = _test_clone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.clone(input),
);
