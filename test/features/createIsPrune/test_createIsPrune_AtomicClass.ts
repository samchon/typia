import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_AtomicClass = _test_isPrune(
    "AtomicClass",
    AtomicClass.generate,
    typia.createIsPrune<AtomicClass>(),
    AtomicClass.SPOILERS,
);
