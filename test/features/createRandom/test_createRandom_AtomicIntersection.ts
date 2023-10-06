import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createRandom_AtomicIntersection = _test_random("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection
)({
    random: typia.createRandom<AtomicIntersection>(),
    assert: typia.createAssert<AtomicIntersection>(),
});
