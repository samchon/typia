import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_random_TypeTagFormat = _test_random(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
    random: typia.createRandom<TypeTagFormat>(),
    assert: typia.createAssert<TypeTagFormat>(),
});
