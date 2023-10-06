import typia from "../../../src";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_createAssertPrune_AtomicClass = _test_misc_assertPrune(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)(typia.misc.createAssertPrune<AtomicClass>());
