import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_createRandom_TypeTagTypeBigInt = _test_random(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)({
    random: typia.createRandom<TypeTagTypeBigInt>(),
    assert: typia.createAssert<TypeTagTypeBigInt>(),
});
