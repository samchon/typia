import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_AtomicClass = _test_assertClone(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.assertClone(input),
    AtomicClass.SPOILERS,
);
