import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createValidatePrune_AtomicClass = _test_validatePrune(
    "AtomicClass",
    AtomicClass.generate,
    typia.createValidatePrune<AtomicClass>(),
    AtomicClass.SPOILERS,
);
