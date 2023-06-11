import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createIsStringify_AtomicIntersection = _test_isStringify(
    "AtomicIntersection",
    AtomicIntersection.generate,
    typia.createIsStringify<AtomicIntersection>(),
    AtomicIntersection.SPOILERS,
);
