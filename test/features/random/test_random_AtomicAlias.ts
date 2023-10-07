import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_random_AtomicAlias = _test_random("AtomicAlias")<AtomicAlias>(
    AtomicAlias,
)({
    random: () => typia.random<AtomicAlias>((AtomicAlias as any).RANDOM),
    assert: typia.createAssert<AtomicAlias>(),
});
