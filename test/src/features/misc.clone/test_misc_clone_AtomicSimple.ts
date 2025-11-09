import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_clone_AtomicSimple = (): void => _test_misc_clone(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((input) => typia.misc.clone<AtomicSimple>(input));
