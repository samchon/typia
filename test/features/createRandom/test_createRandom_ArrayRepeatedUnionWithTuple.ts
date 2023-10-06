import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createRandom_ArrayRepeatedUnionWithTuple = _test_random("ArrayRepeatedUnionWithTuple")<ArrayRepeatedUnionWithTuple>(
    ArrayRepeatedUnionWithTuple
)({
    random: typia.createRandom<ArrayRepeatedUnionWithTuple>(),
    assert: typia.createAssert<ArrayRepeatedUnionWithTuple>(),
});
