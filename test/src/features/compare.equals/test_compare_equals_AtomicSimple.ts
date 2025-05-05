import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_compare_equals_AtomicSimple = _test_compare_equals(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((a, b) => typia.compare.equals<AtomicSimple>(a, b));
