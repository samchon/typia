import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_compare_equals_TypeTagAtomicUnion = _test_compare_equals(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)((a, b) => typia.compare.equals<TypeTagAtomicUnion>(a, b));
