import typia from "typia";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_AtomicClass = _test_assertClone(
    "AtomicClass",
    AtomicClass.generate,
    typia.createAssertClone<AtomicClass>(),
    AtomicClass.SPOILERS,
);
