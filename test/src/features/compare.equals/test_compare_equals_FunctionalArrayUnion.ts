import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_compare_equals_FunctionalArrayUnion = _test_compare_equals(
    "FunctionalArrayUnion",
)<FunctionalArrayUnion>(
    FunctionalArrayUnion
)((a, b) => typia.compare.equals<FunctionalArrayUnion>(a, b));
