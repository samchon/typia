import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_validatePrune_AtomicIntersection = _test_validatePrune(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) => typia.validatePrune<AtomicIntersection>(input),
    AtomicIntersection.SPOILERS,
);
