import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_validateClone_ArraySimple = (): void => _test_misc_validateClone(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)((input) => typia.misc.validateClone<ArraySimple>(input));
