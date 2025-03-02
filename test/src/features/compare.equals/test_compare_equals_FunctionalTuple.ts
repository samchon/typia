import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_compare_equals_FunctionalTuple = _test_compare_equals(
    "FunctionalTuple",
)<FunctionalTuple>(
    FunctionalTuple
)((a, b) => typia.compare.equals<FunctionalTuple>(a, b));
