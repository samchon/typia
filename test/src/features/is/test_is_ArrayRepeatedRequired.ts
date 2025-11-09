import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_is_ArrayRepeatedRequired = (): void => _test_is(
    "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(
    ArrayRepeatedRequired
)((input) => typia.is<ArrayRepeatedRequired>(input));
