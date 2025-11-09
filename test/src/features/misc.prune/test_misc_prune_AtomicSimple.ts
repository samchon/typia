import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_prune_AtomicSimple = (): void => _test_misc_prune(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((input) => typia.misc.prune<AtomicSimple>(input));
