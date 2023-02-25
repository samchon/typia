import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_AtomicClass = _test_validatePrune(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.validatePrune(input),
    AtomicClass.SPOILERS,
);
