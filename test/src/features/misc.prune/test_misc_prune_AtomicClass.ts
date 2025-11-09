import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_prune_AtomicClass = (): void => _test_misc_prune(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)((input) => typia.misc.prune<AtomicClass>(input));
