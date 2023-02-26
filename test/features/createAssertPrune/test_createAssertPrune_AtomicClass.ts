import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssertPrune_AtomicClass = _test_assertPrune(
    "AtomicClass",
    AtomicClass.generate,
    typia.createAssertPrune<AtomicClass>(),
    AtomicClass.SPOILERS,
);
