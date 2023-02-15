import typia from "typia";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_AtomicClass = _test_assertPrune(
    "AtomicClass",
    AtomicClass.generate,
    typia.createAssertPrune<AtomicClass>(),
    AtomicClass.SPOILERS,
);
