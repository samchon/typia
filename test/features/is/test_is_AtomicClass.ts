import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_is } from "../internal/_test_is";

export const test_is_AtomicClass = _test_is(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.is(input),
    AtomicClass.SPOILERS,
);
