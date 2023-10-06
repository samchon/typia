import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_createRandom_TypeTagRange = _test_random("TypeTagRange")<TypeTagRange>(
    TypeTagRange
)({
    random: typia.createRandom<TypeTagRange>(),
    assert: typia.createAssert<TypeTagRange>(),
});
