import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createRandom_AtomicUnion = _test_random("AtomicUnion")<AtomicUnion>(
    AtomicUnion
)({
    random: typia.createRandom<AtomicUnion>(),
    assert: typia.createAssert<AtomicUnion>(),
});
