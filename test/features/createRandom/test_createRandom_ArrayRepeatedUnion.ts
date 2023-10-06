import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createRandom_ArrayRepeatedUnion = _test_random("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)({
    random: typia.createRandom<ArrayRepeatedUnion>(),
    assert: typia.createAssert<ArrayRepeatedUnion>(),
});
