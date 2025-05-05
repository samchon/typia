import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_compare_equals_AtomicClass = _test_compare_equals(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)((a, b) => typia.compare.equals<AtomicClass>(a, b));
