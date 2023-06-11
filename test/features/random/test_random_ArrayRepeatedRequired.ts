import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_random_ArrayRepeatedRequired = _test_random(
    "ArrayRepeatedRequired",
    () => typia.random<ArrayRepeatedRequired>(),
    typia.createAssert<typia.Primitive<ArrayRepeatedRequired>>(),
);
