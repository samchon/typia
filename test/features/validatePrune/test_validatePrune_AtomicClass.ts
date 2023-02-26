import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_validatePrune_AtomicClass = _test_validatePrune(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.validatePrune(input),
    AtomicClass.SPOILERS,
);
