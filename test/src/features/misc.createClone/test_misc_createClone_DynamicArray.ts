import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_misc_createClone_DynamicArray = (): void => _test_misc_clone(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)(typia.misc.createClone<DynamicArray>());
