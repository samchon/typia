import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_random_ArrayRepeatedNullable = _test_random(
    "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(ArrayRepeatedNullable)({
    random: typia.createRandom<ArrayRepeatedNullable>(),
    assert: typia.createAssert<ArrayRepeatedNullable>(),
});
