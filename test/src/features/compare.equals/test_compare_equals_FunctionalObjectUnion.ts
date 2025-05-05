import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_compare_equals_FunctionalObjectUnion = _test_compare_equals(
    "FunctionalObjectUnion",
)<FunctionalObjectUnion>(
    FunctionalObjectUnion
)((a, b) => typia.compare.equals<FunctionalObjectUnion>(a, b));
