import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_compare_equals_FunctionalValue = _test_compare_equals(
    "FunctionalValue",
)<FunctionalValue>(
    FunctionalValue
)((a, b) => typia.compare.equals<FunctionalValue>(a, b));
