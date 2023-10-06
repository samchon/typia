import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createRandom_ArrayRecursive = _test_random("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive
)({
    random: typia.createRandom<ArrayRecursive>(),
    assert: typia.createAssert<ArrayRecursive>(),
});
