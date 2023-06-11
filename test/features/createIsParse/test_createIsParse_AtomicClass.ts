import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_createIsParse_AtomicClass = _test_isParse(
    "AtomicClass",
    AtomicClass.generate,
    typia.createIsParse<AtomicClass>(),
    AtomicClass.SPOILERS,
);
