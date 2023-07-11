import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_stringify_AtomicIntersection = _test_stringify(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) => typia.stringify(input),
);
