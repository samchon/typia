import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_assertClone_AtomicIntersection = _test_assertClone(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) => typia.assertClone<AtomicIntersection>(input),
    AtomicIntersection.SPOILERS,
);
