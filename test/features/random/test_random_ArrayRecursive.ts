import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_random } from "../internal/_test_random";

export const test_random_ArrayRecursive = _test_random(
    "ArrayRecursive",
    () => typia.random<ArrayRecursive>(),
    typia.createAssert<ArrayRecursive>(),
);
