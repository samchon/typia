import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createAssertParse_AtomicIntersection = _test_assertParse(
    "AtomicIntersection",
    AtomicIntersection.generate,
    typia.createAssertParse<AtomicIntersection>(),
    AtomicIntersection.SPOILERS,
);
