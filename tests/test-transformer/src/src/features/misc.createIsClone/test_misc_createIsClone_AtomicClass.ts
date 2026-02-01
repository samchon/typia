import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_createIsClone_AtomicClass = (): void => _test_misc_isClone(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)(typia.misc.createIsClone<AtomicClass>());
