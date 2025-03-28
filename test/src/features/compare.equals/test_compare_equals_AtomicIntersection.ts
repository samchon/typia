import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_compare_equals_AtomicIntersection = _test_compare_equals(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)((a, b) => typia.compare.equals<AtomicIntersection>(a, b));
