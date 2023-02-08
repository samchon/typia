import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_AtomicClass = _test_assertParse(
    "AtomicClass",
    AtomicClass.generate,
    typia.createAssertParse<AtomicClass>(),
    AtomicClass.SPOILERS,
);