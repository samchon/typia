import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_random_ArrayRecursive = _test_random<ArrayRecursive>(
    ArrayRecursive,
)({
    random: () => typia.random<ArrayRecursive>(),
    assert: typia.createAssert<ArrayRecursive>(),
});
