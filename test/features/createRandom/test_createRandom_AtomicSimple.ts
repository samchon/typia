import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createRandom_AtomicSimple = _test_random(
    "AtomicSimple",
)<AtomicSimple>(AtomicSimple)({
    random: typia.createRandom<AtomicSimple>((AtomicSimple as any).RANDOM),
    assert: typia.createAssert<AtomicSimple>(),
});
