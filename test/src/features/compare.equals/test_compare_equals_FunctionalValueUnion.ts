import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_compare_equals_FunctionalValueUnion = _test_compare_equals(
    "FunctionalValueUnion",
)<FunctionalValueUnion>(
    FunctionalValueUnion
)((a, b) => typia.compare.equals<FunctionalValueUnion>(a, b));
