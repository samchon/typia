import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_random_TypeTagRange = _test_random(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)({
    random: () => typia.random<TypeTagRange>(),
    assert: typia.createAssert<TypeTagRange>(),
});
