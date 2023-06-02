import typia from "../../../src";

import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";
import { _test_random } from "../../internal/_test_random";

export const test_random_ArrayRepeatedOptional = _test_random(
    "ArrayRepeatedOptional",
    () => typia.random<ArrayRepeatedOptional>(),
typia.createAssert<typia.Primitive<ArrayRepeatedOptional>>(),
);
