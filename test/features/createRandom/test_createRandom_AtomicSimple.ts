import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_random_AtomicSimple = _test_random<AtomicSimple>(
    AtomicSimple,
)({
    random: typia.createRandom<AtomicSimple>(),
    assert: typia.createAssert<AtomicSimple>(),
});
