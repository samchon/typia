import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_compare_equals_AtomicUnion = _test_compare_equals(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)((a, b) => typia.compare.equals<AtomicUnion>(a, b));
