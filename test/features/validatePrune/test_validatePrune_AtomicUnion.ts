import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_validatePrune_AtomicUnion = _test_validatePrune(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.validatePrune(input),
    AtomicUnion.SPOILERS,
);
