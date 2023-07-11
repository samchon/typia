import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createIsParse_AtomicIntersection = _test_isParse(
    "AtomicIntersection",
    AtomicIntersection.generate,
    typia.createIsParse<AtomicIntersection>(),
    AtomicIntersection.SPOILERS,
);
