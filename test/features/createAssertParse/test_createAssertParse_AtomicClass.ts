import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssertParse_AtomicClass = _test_assertParse(
    "AtomicClass",
    AtomicClass.generate,
    typia.createAssertParse<AtomicClass>(),
    AtomicClass.SPOILERS,
);
