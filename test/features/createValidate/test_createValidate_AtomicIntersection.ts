import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_validate_AtomicIntersection = _test_validate(
    "AtomicIntersection",
    AtomicIntersection.generate,
    typia.createValidate<AtomicIntersection>(),
    AtomicIntersection.SPOILERS,
);
