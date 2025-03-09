import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_compare_equals_TypeTagTuple = _test_compare_equals(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)((a, b) => typia.compare.equals<TypeTagTuple>(a, b));
