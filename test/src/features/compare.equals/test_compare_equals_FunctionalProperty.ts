import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_compare_equals_FunctionalProperty = _test_compare_equals(
    "FunctionalProperty",
)<FunctionalProperty>(
    FunctionalProperty
)((a, b) => typia.compare.equals<FunctionalProperty>(a, b));
