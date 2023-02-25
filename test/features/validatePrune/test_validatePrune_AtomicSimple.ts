import typia from "../../../src";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_AtomicSimple = _test_validatePrune(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.validatePrune(input),
    AtomicSimple.SPOILERS,
);
