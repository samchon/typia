import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_random_ArrayRecursive = _test_random(
    "ArrayRecursive",
    () => typia.random<ArrayRecursive>(),
    typia.createAssert<ArrayRecursive>(),
);
