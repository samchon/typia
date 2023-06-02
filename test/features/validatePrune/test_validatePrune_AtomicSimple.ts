import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_validatePrune_AtomicSimple = _test_validatePrune(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.validatePrune(input),
    AtomicSimple.SPOILERS,
);
