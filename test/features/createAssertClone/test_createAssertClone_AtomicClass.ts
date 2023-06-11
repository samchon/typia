import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssertClone_AtomicClass = _test_assertClone(
    "AtomicClass",
    AtomicClass.generate,
    typia.createAssertClone<AtomicClass>(),
    AtomicClass.SPOILERS,
);
