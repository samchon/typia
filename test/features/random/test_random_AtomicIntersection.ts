import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_random_AtomicIntersection = _test_random(
    "AtomicIntersection",
    () => typia.random<AtomicIntersection>(),
    typia.createAssert<typia.Primitive<AtomicIntersection>>(),
);
