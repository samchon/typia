import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_validateParse_AtomicIntersection = _test_validateParse(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) => typia.validateParse<AtomicIntersection>(input),
    AtomicIntersection.SPOILERS,
);
