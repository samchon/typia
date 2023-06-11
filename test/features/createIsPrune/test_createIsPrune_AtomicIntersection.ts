import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createIsPrune_AtomicIntersection = _test_isPrune(
    "AtomicIntersection",
    AtomicIntersection.generate,
    typia.createIsPrune<AtomicIntersection>(),
    AtomicIntersection.SPOILERS,
);
