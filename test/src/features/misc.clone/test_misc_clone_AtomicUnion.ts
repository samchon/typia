import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_clone_AtomicUnion = (): void => _test_misc_clone(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)((input) => typia.misc.clone<AtomicUnion>(input));
