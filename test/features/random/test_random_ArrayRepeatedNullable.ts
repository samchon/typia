import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_random } from "../../internal/_test_random";

export const test_random_ArrayRepeatedNullable = _test_random(
    "ArrayRepeatedNullable",
    () => typia.random<ArrayRepeatedNullable>(),
typia.createAssert<typia.Primitive<ArrayRepeatedNullable>>(),
);
