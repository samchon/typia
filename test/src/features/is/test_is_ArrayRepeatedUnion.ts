import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_is_ArrayRepeatedUnion = (): void => _test_is(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)((input) => typia.is<ArrayRepeatedUnion>(input));
