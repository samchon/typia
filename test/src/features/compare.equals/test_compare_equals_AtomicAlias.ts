import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_compare_equals_AtomicAlias = _test_compare_equals(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)((a, b) => typia.compare.equals<AtomicAlias>(a, b));
