import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_createRandom_TypeTagAtomicUnion = _test_random(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)({
    random: typia.createRandom<TypeTagAtomicUnion>(
        (TypeTagAtomicUnion as any).RANDOM,
    ),
    assert: typia.createAssert<TypeTagAtomicUnion>(),
});
