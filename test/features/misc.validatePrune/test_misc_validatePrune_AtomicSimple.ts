import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_validatePrune_AtomicSimple = _test_misc_validatePrune(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.misc.validatePrune(input),
    AtomicSimple.SPOILERS,
);
