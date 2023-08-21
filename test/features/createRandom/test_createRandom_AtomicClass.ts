import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_random_AtomicClass = _test_random("AtomicClass")<AtomicClass>(
    AtomicClass,
)({
    random: typia.createRandom<AtomicClass>(),
    assert: typia.createAssert<AtomicClass>(),
});
