import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_validateClone_AtomicIntersection = _test_validateClone(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) => typia.validateClone(input),
    AtomicIntersection.SPOILERS,
);
