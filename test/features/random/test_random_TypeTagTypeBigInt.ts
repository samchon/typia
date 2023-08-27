import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_random_TypeTagTypeBigInt = _test_random(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)({
    random: () => typia.random<TypeTagTypeBigInt>(),
    assert: typia.createAssert<TypeTagTypeBigInt>(),
});
