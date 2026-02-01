import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_is_ArraySimple = (): void => _test_is(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)((input) => typia.is<ArraySimple>(input));
