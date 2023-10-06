import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_clone_ArraySimple = _test_misc_clone(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)((input) => typia.misc.clone<ArraySimple>(input));
