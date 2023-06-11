import typia from "../../../src";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_createValidatePrune_AtomicSimple = _test_validatePrune(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createValidatePrune<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
