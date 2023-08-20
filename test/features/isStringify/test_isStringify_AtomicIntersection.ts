import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_isStringify_AtomicIntersection = _test_isStringify(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) => typia.isStringify<AtomicIntersection>(input),
    AtomicIntersection.SPOILERS,
);
