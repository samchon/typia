import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_compare_equals_FunctionalTupleUnion = _test_compare_equals(
    "FunctionalTupleUnion",
)<FunctionalTupleUnion>(
    FunctionalTupleUnion
)((a, b) => typia.compare.equals<FunctionalTupleUnion>(a, b));
