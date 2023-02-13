import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_AtomicClass = _test_assertPrune(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.assertPrune(input),
    AtomicClass.SPOILERS,
);