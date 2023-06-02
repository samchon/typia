import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_createValidatePrune_AtomicUnion = _test_validatePrune(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createValidatePrune<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
