import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_compare_equals_FunctionalArray = _test_compare_equals(
    "FunctionalArray",
)<FunctionalArray>(
    FunctionalArray
)((a, b) => typia.compare.equals<FunctionalArray>(a, b));
