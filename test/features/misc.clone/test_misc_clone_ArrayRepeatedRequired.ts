import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_misc_clone_ArrayRepeatedRequired = _test_misc_clone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.misc.clone(input),
);
