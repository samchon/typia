import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_random_TypeTagMatrix = _test_random(
    "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)({
    random: typia.createRandom<TypeTagMatrix>(),
    assert: typia.createAssert<TypeTagMatrix>(),
});
