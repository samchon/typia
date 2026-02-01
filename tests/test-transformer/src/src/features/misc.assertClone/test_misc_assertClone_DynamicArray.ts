import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicArray } from "../../structures/DynamicArray";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_DynamicArray = (): void => _test_misc_assertClone(TypeGuardError)(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)((input) => typia.misc.assertClone<DynamicArray>(input));
