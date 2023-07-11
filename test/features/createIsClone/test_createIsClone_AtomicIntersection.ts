import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createIsClone_AtomicIntersection = _test_isClone(
    "AtomicIntersection",
    AtomicIntersection.generate,
    typia.createIsClone<AtomicIntersection>(),
    AtomicIntersection.SPOILERS,
);
