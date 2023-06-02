import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_AtomicClass = _test_isClone(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.isClone(input),
    AtomicClass.SPOILERS,
);
