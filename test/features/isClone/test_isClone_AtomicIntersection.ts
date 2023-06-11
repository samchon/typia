import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_isClone_AtomicIntersection = _test_isClone(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) => typia.isClone(input),
    AtomicIntersection.SPOILERS,
);
