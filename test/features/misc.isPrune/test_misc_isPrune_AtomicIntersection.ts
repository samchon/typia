import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_isPrune_AtomicIntersection = _test_misc_isPrune(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) => typia.misc.isPrune(input),
    AtomicIntersection.SPOILERS,
);
