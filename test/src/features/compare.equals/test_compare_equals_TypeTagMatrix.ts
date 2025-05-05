import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_compare_equals_TypeTagMatrix = _test_compare_equals(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)((a, b) => typia.compare.equals<TypeTagMatrix>(a, b));
