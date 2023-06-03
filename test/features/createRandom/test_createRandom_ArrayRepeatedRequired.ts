import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createRandom_ArrayRepeatedRequired = _test_random(
    "ArrayRepeatedRequired",
    typia.createRandom<ArrayRepeatedRequired>(),
    typia.createAssert<typia.Primitive<ArrayRepeatedRequired>>(),
);
