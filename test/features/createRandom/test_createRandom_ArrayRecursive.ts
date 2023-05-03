import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createRandom_ArrayRecursive = _test_random(
    "ArrayRecursive",
    typia.createRandom<ArrayRecursive>(),
    typia.createAssert<typia.Primitive<ArrayRecursive>>(),
);
