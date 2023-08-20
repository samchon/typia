import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_isPrune_AtomicClass = _test_isPrune(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.isPrune<AtomicClass>(input),
    AtomicClass.SPOILERS,
);
