import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_isPrune_AtomicIntersection = (): void => _test_misc_isPrune(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)((input) => typia.misc.isPrune<AtomicIntersection>(input));
