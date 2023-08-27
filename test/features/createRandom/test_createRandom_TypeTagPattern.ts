import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_random_TypeTagPattern = _test_random(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)({
    random: typia.createRandom<TypeTagPattern>(),
    assert: typia.createAssert<TypeTagPattern>(),
});
