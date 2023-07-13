import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_validatePrune_AtomicClass = _test_misc_validatePrune(
    "AtomicClass",
    AtomicClass.generate,
    typia.misc.createValidatePrune<AtomicClass>(),
    AtomicClass.SPOILERS,
);
