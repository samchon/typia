import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createAssertClone_AtomicIntersection = _test_assertClone(
    "AtomicIntersection",
    AtomicIntersection.generate,
    typia.createAssertClone<AtomicIntersection>(),
    AtomicIntersection.SPOILERS,
);
