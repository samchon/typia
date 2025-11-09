import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_is_DynamicArray = (): void => _test_is(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)((input) => typia.is<DynamicArray>(input));
