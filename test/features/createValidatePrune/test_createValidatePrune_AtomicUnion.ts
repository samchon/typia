import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createValidatePrune_AtomicUnion = _test_validatePrune(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createValidatePrune<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
