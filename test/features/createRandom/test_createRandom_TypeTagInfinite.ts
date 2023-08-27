import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_random_TypeTagInfinite = _test_random(
    "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)({
    random: typia.createRandom<TypeTagInfinite>(),
    assert: typia.createAssert<TypeTagInfinite>(),
});
