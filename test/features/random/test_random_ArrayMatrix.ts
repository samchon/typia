import typia from "../../../src";

import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_random } from "../../internal/_test_random";

export const test_random_ArrayMatrix = _test_random(
    "ArrayMatrix",
    () => typia.random<ArrayMatrix>(),
typia.createAssert<typia.Primitive<ArrayMatrix>>(),
);
