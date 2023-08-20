import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assertClone_AtomicClass = _test_assertClone(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.assertClone<AtomicClass>(input),
    AtomicClass.SPOILERS,
);
