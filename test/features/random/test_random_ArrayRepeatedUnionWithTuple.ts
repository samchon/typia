import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_random_ArrayRepeatedUnionWithTuple = _test_random(
    "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)({
    random: () => typia.random<ArrayRepeatedUnionWithTuple>(),
    assert: typia.createAssert<ArrayRepeatedUnionWithTuple>(),
});
