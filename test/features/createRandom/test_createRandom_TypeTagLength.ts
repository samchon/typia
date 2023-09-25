import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createRandom_TypeTagLength = _test_random(
    "TypeTagLength",
)<TypeTagLength>(TypeTagLength)({
    random: typia.createRandom<TypeTagLength>(),
    assert: typia.createAssert<TypeTagLength>(),
});
