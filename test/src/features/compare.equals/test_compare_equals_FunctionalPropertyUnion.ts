import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_compare_equals_FunctionalPropertyUnion = _test_compare_equals(
    "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(
    FunctionalPropertyUnion
)((a, b) => typia.compare.equals<FunctionalPropertyUnion>(a, b));
