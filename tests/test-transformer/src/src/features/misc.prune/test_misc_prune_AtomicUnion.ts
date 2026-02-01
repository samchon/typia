import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_prune_AtomicUnion = (): void => _test_misc_prune(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)((input) => typia.misc.prune<AtomicUnion>(input));
