import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_random_TypeTagBigInt = _test_random(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
    random: typia.createRandom<TypeTagBigInt>(),
    assert: typia.createAssert<TypeTagBigInt>(),
});
