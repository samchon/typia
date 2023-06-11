import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_random } from "../../internal/_test_random";

export const test_random_ArrayRepeatedRequired = _test_random(
    "ArrayRepeatedRequired",
    () => typia.random<ArrayRepeatedRequired>(),
typia.createAssert<typia.Primitive<ArrayRepeatedRequired>>(),
);
