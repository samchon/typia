import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createValidatePrune_AtomicSimple = _test_validatePrune(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createValidatePrune<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
