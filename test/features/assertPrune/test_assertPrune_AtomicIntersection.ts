import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_assertPrune_AtomicIntersection = _test_assertPrune(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) => typia.assertPrune<AtomicIntersection>(input),
    AtomicIntersection.SPOILERS,
);
