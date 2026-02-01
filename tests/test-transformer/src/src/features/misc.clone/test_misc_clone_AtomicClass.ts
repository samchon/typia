import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_clone_AtomicClass = (): void => _test_misc_clone(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)((input) => typia.misc.clone<AtomicClass>(input));
