import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_misc_createIsClone_ArrayRepeatedRequired = (): void => _test_misc_isClone(
    "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(
    ArrayRepeatedRequired
)(typia.misc.createIsClone<ArrayRepeatedRequired>());
